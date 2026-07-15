import User from '../models/User.js';

// @desc    Get all staff for a restaurant
// @route   GET /api/staff
// @access  Private
export const getStaff = async (req, res) => {
    try {
        const staffRoles = ['BranchManager', 'Chef', 'Waiter', 'Cashier'];
        
        const staff = await User.find({ 
            restaurantId: req.user.restaurantId,
            role: { $in: staffRoles }
        }).populate('branchId', 'name').select('-password');
        
        res.json(staff);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a new staff member
// @route   POST /api/staff
// @access  Private
export const createStaff = async (req, res) => {
    const { name, email, phone, role, branchId, password } = req.body;

    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'A user with this email already exists' });
        }

        const validRoles = ['BranchManager', 'Chef', 'Waiter', 'Cashier'];
        if (!validRoles.includes(role)) {
            return res.status(400).json({ message: 'Invalid staff role' });
        }

        const user = await User.create({
            name,
            email,
            phone, // User model doesn't strictly have phone, but it will ignore it or save if strict is false
            password: password || 'password123',
            role,
            restaurantId: req.user.restaurantId,
            branchId: branchId || null
        });

        // Fetch populated
        const populatedUser = await User.findById(user._id).populate('branchId', 'name').select('-password');
        res.status(201).json(populatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Delete a staff member
// @route   DELETE /api/staff/:id
// @access  Private
export const deleteStaff = async (req, res) => {
    try {
        const staff = await User.findById(req.params.id);

        if (staff) {
            if (staff.restaurantId?.toString() !== req.user.restaurantId.toString()) {
                return res.status(403).json({ message: 'Not authorized to delete this staff' });
            }

            await staff.deleteOne();
            res.json({ message: 'Staff member removed' });
        } else {
            res.status(404).json({ message: 'Staff member not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
