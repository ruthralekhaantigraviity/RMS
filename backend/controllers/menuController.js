import MenuItem from '../models/MenuItem.js';

// In-memory cache for public menu requests to eliminate multi-second MongoDB Atlas roundtrips
let menuCache = { data: null, expiresAt: 0, key: '' };

export const clearMenuCache = () => {
    menuCache = { data: null, expiresAt: 0, key: '' };
};

// @desc    Get all menu items
// @route   GET /api/menu
// @access  Public
export const getMenuItems = async (req, res) => {
    try {
        // Resolve user's restaurant ID if authenticated as staff/admin
        let userRestaurantId = null;
        if (req.user && req.user.role !== 'Customer' && req.user.role !== 'SuperAdmin') {
            userRestaurantId = req.user.restaurantId;
            if (!userRestaurantId && req.user.branchId) {
                const Branch = (await import('../models/Branch.js')).default;
                const bDoc = await Branch.findById(req.user.branchId).select('restaurantId');
                if (bDoc) userRestaurantId = bDoc.restaurantId;
            }
        }

        // Determine target restaurant ID
        let targetRestaurantId = null;
        if (req.query.restaurantId && req.query.restaurantId !== 'null' && req.query.restaurantId !== 'undefined') {
            targetRestaurantId = req.query.restaurantId;
        } else if (userRestaurantId) {
            targetRestaurantId = userRestaurantId;
        }

        const isStaff = Boolean(
            userRestaurantId ||
            req.query.forStaff === 'true' || 
            req.headers['x-staff-portal'] === 'true' || 
            (req.user && req.user.role !== 'Customer' && req.user.role !== 'DeliveryPartner')
        );

        // Only cache public customer catalog responses to eliminate cross-restaurant data leakage
        const cacheKey = !isStaff && targetRestaurantId ? `public_menu_${targetRestaurantId}_${req.query.branchId || ''}` : null;
        const now = Date.now();
        if (cacheKey && menuCache.data && menuCache.key === cacheKey && menuCache.expiresAt > now) {
            return res.json(menuCache.data);
        }

        const filter = {};
        // Customers only see active dishes; staff/admin can view all (active and inactive) for management
        if (!isStaff) {
            filter.isActive = true;
        } else if (req.query.status === 'active') {
            filter.isActive = true;
        } else if (req.query.status === 'inactive') {
            filter.isActive = false;
        }

        if (targetRestaurantId) {
            filter.restaurantId = targetRestaurantId;
            const targetBranchId = req.query.branchId || (isStaff && req.user?.branchId);
            if (targetBranchId && targetBranchId !== 'null' && targetBranchId !== 'undefined') {
                filter.$or = [
                    { branchId: targetBranchId },
                    { branchId: { $exists: false } },
                    { branchId: null }
                ];
            }
        }

        let items = await MenuItem.find(filter)
            .populate('restaurantId', 'name city address approvalStatus subscription isActive isDeleted status')
            .lean();

        // If filtering by branchId yielded 0 items, fallback to all active dishes for this restaurant
        if (items.length === 0 && filter.$or) {
            delete filter.$or;
            items = await MenuItem.find(filter)
                .populate('restaurantId', 'name city address approvalStatus subscription isActive isDeleted status')
                .lean();
        }

        // Exclude menu items whose parent restaurant has been deleted, rejected, or inactive/suspended/frozen!
        const validItems = items.filter(item => {
            if (!item.restaurantId) return false;
            if (typeof item.restaurantId === 'object') {
                if (item.restaurantId.isDeleted) return false;
                if (item.restaurantId.status && item.restaurantId.status !== 'Active') return false;
                if (item.restaurantId.isActive === false) return false;
                const subStatus = item.restaurantId.subscription?.status;
                const isSubscribed = (subStatus && !['Frozen', 'Cancelled', 'Inactive', 'Expired', 'Suspended'].includes(subStatus)) || item.restaurantId.subscription?.trialActive;
                if (!isSubscribed && item.restaurantId.approvalStatus !== 'Approved') return false;
                if (subStatus && ['Frozen', 'Cancelled', 'Inactive', 'Expired', 'Suspended'].includes(subStatus)) {
                    return false;
                }
            }
            return true;
        });

        if (cacheKey) {
            menuCache = { data: validItems, expiresAt: now + 15000, key: cacheKey };
        }
        res.json(validItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a menu item
// @route   POST /api/menu
// @access  Private (Admin/Manager/Chef)
export const createMenuItem = async (req, res) => {
    try {
        const payload = { ...req.body };
        let rId = req.user?.restaurantId || payload.restaurantId;
        if (!rId && req.user?.branchId) {
            const Branch = (await import('../models/Branch.js')).default;
            const bDoc = await Branch.findById(req.user.branchId).select('restaurantId');
            if (bDoc) rId = bDoc.restaurantId;
        }
        if (!rId && req.user?.role !== 'SuperAdmin') {
            return res.status(400).json({ message: 'Restaurant ID is required to create a menu item' });
        }
        if (rId) {
            payload.restaurantId = rId;
        }
        if (req.user?.branchId && !payload.branchId) {
            payload.branchId = req.user.branchId;
        }
        const item = await MenuItem.create(payload);
        clearMenuCache();
        res.status(201).json(item);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Update a menu item
// @route   PUT /api/menu/:id
// @access  Private (Admin/Manager/Chef)
export const updateMenuItem = async (req, res) => {
    try {
        const existing = await MenuItem.findById(req.params.id);
        if (!existing) {
            return res.status(404).json({ message: 'Menu item not found' });
        }
        let userRestaurantId = req.user?.restaurantId;
        if (!userRestaurantId && req.user?.branchId) {
            const Branch = (await import('../models/Branch.js')).default;
            const bDoc = await Branch.findById(req.user.branchId).select('restaurantId');
            if (bDoc) userRestaurantId = bDoc.restaurantId;
        }
        if (req.user?.role !== 'SuperAdmin' && String(existing.restaurantId) !== String(userRestaurantId)) {
            return res.status(403).json({ message: 'Not authorized to modify this restaurant menu item' });
        }
        const updates = { ...req.body };
        delete updates.restaurantId;
        Object.assign(existing, updates);
        const saved = await existing.save();
        clearMenuCache();
        res.json(saved);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Delete a menu item
// @route   DELETE /api/menu/:id
// @access  Private (Admin/Manager/Chef)
export const deleteMenuItem = async (req, res) => {
    try {
        const item = await MenuItem.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'Menu item not found' });
        }
        let userRestaurantId = req.user?.restaurantId;
        if (!userRestaurantId && req.user?.branchId) {
            const Branch = (await import('../models/Branch.js')).default;
            const bDoc = await Branch.findById(req.user.branchId).select('restaurantId');
            if (bDoc) userRestaurantId = bDoc.restaurantId;
        }
        if (req.user?.role !== 'SuperAdmin' && String(item.restaurantId) !== String(userRestaurantId)) {
            return res.status(403).json({ message: 'Not authorized to delete this restaurant menu item' });
        }
        await item.deleteOne();
        clearMenuCache();
        res.json({ message: 'Item removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
