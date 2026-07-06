import Supplier from '../models/Supplier.js';

// @desc    Get all suppliers
// @route   GET /api/suppliers
// @access  Private
export const getSuppliers = async (req, res) => {
    try {
        const filter = {};
        
        // If staff is logged in, filter by their branch
        if (req.user && req.user.branchId) {
            filter.branch = req.user.branchId;
        } else if (req.query.branch) {
            filter.branch = req.query.branch;
        }
        
        const suppliers = await Supplier.find(filter).populate('branch', 'name');
        res.json(suppliers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a supplier
// @route   POST /api/suppliers
// @access  Private
export const createSupplier = async (req, res) => {
    const { name, category, contactPerson, phone, email, address, branch, isActive } = req.body;

    try {
        const supplier = await Supplier.create({
            name,
            category,
            contactPerson,
            phone,
            email,
            address,
            branch: req.user.branchId || branch, // Use user's branch if they have one, else from body
            isActive: isActive !== undefined ? isActive : true
        });

        const populatedSupplier = await Supplier.findById(supplier._id).populate('branch', 'name');
        res.status(201).json(populatedSupplier);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Update a supplier
// @route   PUT /api/suppliers/:id
// @access  Private
export const updateSupplier = async (req, res) => {
    try {
        const supplier = await Supplier.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('branch', 'name');
        if (supplier) {
            res.json(supplier);
        } else {
            res.status(404).json({ message: 'Supplier not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Delete a supplier
// @route   DELETE /api/suppliers/:id
// @access  Private
export const deleteSupplier = async (req, res) => {
    try {
        const supplier = await Supplier.findById(req.params.id);
        if (supplier) {
            await supplier.deleteOne();
            res.json({ message: 'Supplier removed' });
        } else {
            res.status(404).json({ message: 'Supplier not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
