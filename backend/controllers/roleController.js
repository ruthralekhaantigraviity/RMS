import User from '../models/User.js';

// @desc    Get counts of users per role
// @route   GET /api/roles
// @access  Private
export const getRolesSummary = async (req, res) => {
    try {
        const stats = await User.aggregate([
            { $match: { restaurantId: req.user.restaurantId } },
            { $group: { _id: "$role", count: { $sum: 1 } } }
        ]);

        const countsMap = {};
        stats.forEach(stat => {
            countsMap[stat._id] = stat.count;
        });

        // Structure the response based on the core system roles
        const rolesSummary = [
            { id: 1, name: 'Super Admin', enumKey: 'SuperAdmin', users: countsMap['SuperAdmin'] || 0, desc: 'Full platform access. Normally reserved for SaaS owners, not restaurant staff.' },
            { id: 2, name: 'Restaurant Admin', enumKey: 'RestaurantAdmin', users: countsMap['RestaurantAdmin'] || 0, desc: 'Full access to all system features and settings for this restaurant.' },
            { id: 3, name: 'Branch Manager', enumKey: 'BranchManager', users: countsMap['BranchManager'] || 0, desc: 'Can manage staff, inventory, and operations for assigned branch.' },
            { id: 4, name: 'Head Chef', enumKey: 'Chef', users: countsMap['Chef'] || 0, desc: 'Access to menu management, inventory, and kitchen display (KDS).' },
            { id: 5, name: 'Waiter', enumKey: 'Waiter', users: countsMap['Waiter'] || 0, desc: 'Can take orders, append items, and view table statuses.' },
            { id: 6, name: 'Cashier', enumKey: 'Cashier', users: countsMap['Cashier'] || 0, desc: 'Can create orders, process split payments, and view billing history.' },
        ];

        res.json(rolesSummary);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
