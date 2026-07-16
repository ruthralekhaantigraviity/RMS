import User from '../models/User.js';
import Role from '../models/Role.js';

// Default core roles configuration if they don't exist in DB
const DEFAULT_CORE_ROLES = [
    { name: 'SuperAdmin', description: 'Full platform access. Normally reserved for SaaS owners, not restaurant staff.', isCoreRole: true, permissions: { 'Dashboard & Analytics': [true, true, true, true], 'Order Management': [true, true, true, true], 'Menu & Catalog': [true, true, true, true], 'Staff Management': [true, true, true, true] } },
    { name: 'RestaurantAdmin', description: 'Full access to all system features and settings for this restaurant.', isCoreRole: true, permissions: { 'Dashboard & Analytics': [true, true, true, true], 'Order Management': [true, true, true, true], 'Menu & Catalog': [true, true, true, true], 'Staff Management': [true, true, true, true] } },
    { name: 'BranchManager', description: 'Can manage staff, inventory, and operations for assigned branch.', isCoreRole: true, permissions: { 'Dashboard & Analytics': [true, false, false, false], 'Order Management': [true, true, true, true], 'Menu & Catalog': [true, false, false, false], 'Staff Management': [true, true, true, false] } },
    { name: 'Chef', description: 'Access to menu management, inventory, and kitchen display (KDS).', isCoreRole: true, permissions: { 'Dashboard & Analytics': [false, false, false, false], 'Order Management': [true, false, true, false], 'Menu & Catalog': [true, false, false, false], 'Staff Management': [false, false, false, false] } },
    { name: 'Waiter', description: 'Can take orders, append items, and view table statuses.', isCoreRole: true, permissions: { 'Dashboard & Analytics': [false, false, false, false], 'Order Management': [true, true, true, false], 'Menu & Catalog': [true, false, false, false], 'Staff Management': [false, false, false, false] } },
    { name: 'Cashier', description: 'Can create orders, process split payments, and view billing history.', isCoreRole: true, permissions: { 'Dashboard & Analytics': [true, false, false, false], 'Order Management': [true, true, true, false], 'Menu & Catalog': [true, false, false, false], 'Staff Management': [false, false, false, false] } }
];

// @desc    Get counts of users per role & all roles
// @route   GET /api/roles
// @access  Private
export const getRolesSummary = async (req, res) => {
    try {
        // Ensure core roles exist in DB
        const coreRoleCount = await Role.countDocuments({ isCoreRole: true });
        if (coreRoleCount < DEFAULT_CORE_ROLES.length) {
            for (const role of DEFAULT_CORE_ROLES) {
                await Role.findOneAndUpdate({ name: role.name, isCoreRole: true }, role, { upsert: true });
            }
        }

        const restaurantId = req.user.restaurantId;
        const roles = await Role.find({ 
            $or: [
                { isCoreRole: true },
                { restaurantId: restaurantId }
            ]
        });

        const stats = await User.aggregate([
            { $match: { restaurantId: restaurantId } },
            { $group: { _id: "$role", count: { $sum: 1 } } }
        ]);

        const countsMap = {};
        stats.forEach(stat => {
            countsMap[stat._id] = stat.count;
        });

        const rolesSummary = roles.map(role => ({
            id: role._id,
            name: role.name,
            desc: role.description,
            isCoreRole: role.isCoreRole,
            permissions: Object.fromEntries(role.permissions),
            users: countsMap[role.name] || 0
        }));

        // Sort: core roles first
        rolesSummary.sort((a, b) => {
            if (a.isCoreRole && !b.isCoreRole) return -1;
            if (!a.isCoreRole && b.isCoreRole) return 1;
            return a.name.localeCompare(b.name);
        });

        res.json(rolesSummary);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create custom role
// @route   POST /api/roles
// @access  Private
export const createRole = async (req, res) => {
    try {
        const { name, desc } = req.body;
        const restaurantId = req.user.restaurantId;

        // Check if role name already exists for this restaurant or as a core role
        const exists = await Role.findOne({ 
            name, 
            $or: [{ isCoreRole: true }, { restaurantId }] 
        });

        if (exists) {
            return res.status(400).json({ message: 'A role with this name already exists' });
        }

        const defaultPermissions = {
            'Dashboard & Analytics': [false, false, false, false],
            'Order Management': [false, false, false, false],
            'Menu & Catalog': [false, false, false, false],
            'Staff Management': [false, false, false, false]
        };

        const newRole = await Role.create({
            name,
            description: desc,
            restaurantId,
            isCoreRole: false,
            permissions: defaultPermissions
        });

        res.status(201).json(newRole);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update custom role permissions
// @route   PUT /api/roles/:id
// @access  Private
export const updateRole = async (req, res) => {
    try {
        const { permissions } = req.body;
        const role = await Role.findById(req.params.id);

        if (!role) {
            return res.status(404).json({ message: 'Role not found' });
        }

        if (role.isCoreRole) {
            return res.status(403).json({ message: 'Cannot modify core system roles' });
        }

        if (role.restaurantId.toString() !== req.user.restaurantId.toString()) {
            return res.status(403).json({ message: 'Not authorized to modify this role' });
        }

        role.permissions = permissions;
        await role.save();

        res.json(role);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Delete custom role
// @route   DELETE /api/roles/:id
// @access  Private
export const deleteRole = async (req, res) => {
    try {
        const role = await Role.findById(req.params.id);

        if (!role) {
            return res.status(404).json({ message: 'Role not found' });
        }

        if (role.isCoreRole) {
            return res.status(403).json({ message: 'Cannot delete core system roles' });
        }

        if (role.restaurantId.toString() !== req.user.restaurantId.toString()) {
            return res.status(403).json({ message: 'Not authorized to delete this role' });
        }
        
        // Ensure no users have this role
        const usersCount = await User.countDocuments({ role: role.name, restaurantId: req.user.restaurantId });
        if (usersCount > 0) {
            return res.status(400).json({ message: 'Cannot delete a role that is assigned to users' });
        }

        await role.deleteOne();

        res.json({ message: 'Role removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
