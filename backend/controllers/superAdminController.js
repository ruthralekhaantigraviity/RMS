import Restaurant from '../models/Restaurant.js';
import User from '../models/User.js';
import Order from '../models/Order.js';
import Plan from '../models/Plan.js';
import Ticket from '../models/Ticket.js';
import Notification from '../models/Notification.js';

// @desc    Get global stats
// @route   GET /api/super-admin/stats
// @access  Private/SuperAdmin
export const getStats = async (req, res) => {
    try {
        const totalRestaurants = await Restaurant.countDocuments();
        const activeRestaurants = await Restaurant.countDocuments({ approvalStatus: 'Approved', 'subscription.status': 'Active' });
        const pendingRestaurants = await Restaurant.countDocuments({ approvalStatus: 'Pending' });
        const frozenRestaurants = await Restaurant.countDocuments({ 'subscription.status': 'Frozen' });
        const totalUsers = await User.countDocuments();
        const totalOrders = await Order.countDocuments();

        // Calculate total revenue from all paid orders
        const revenueAggregation = await Order.aggregate([
            { $match: { isPaid: true } },
            { $group: { _id: null, totalRevenue: { $sum: "$totalPrice" } } }
        ]);
        const totalRevenue = revenueAggregation.length > 0 ? revenueAggregation[0].totalRevenue : 0;

        res.json({
            totalRestaurants,
            activeRestaurants,
            pendingRestaurants,
            frozenRestaurants,
            totalUsers,
            totalOrders,
            totalRevenue
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get all restaurants
// @route   GET /api/super-admin/restaurants
// @access  Private/SuperAdmin
export const getRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find().populate('ownerId', 'name email');
        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update restaurant subscription
// @route   PUT /api/super-admin/restaurants/:id/subscription
// @access  Private/SuperAdmin
export const updateSubscription = async (req, res) => {
    const { status, plan, expiryDate } = req.body;
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        if (!restaurant) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }

        if (status) restaurant.subscription.status = status;
        if (plan) restaurant.subscription.plan = plan;
        if (expiryDate) restaurant.subscription.expiryDate = expiryDate;

        await restaurant.save();
        res.json(restaurant);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Delete a restaurant
// @route   DELETE /api/super-admin/restaurants/:id
// @access  Private/SuperAdmin
export const deleteRestaurant = async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        if (!restaurant) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }
        await Restaurant.findByIdAndDelete(req.params.id);
        res.json({ message: 'Restaurant deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// --- PLAN MANAGEMENT ---

export const getPlans = async (req, res) => {
    try {
        const plans = await Plan.find();
        res.json(plans);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createPlan = async (req, res) => {
    try {
        const payload = { ...req.body };
        if (payload.monthlyPrice === undefined && payload.price !== undefined) payload.monthlyPrice = Number(payload.price);
        if (payload.yearlyPrice === undefined && payload.price !== undefined) payload.yearlyPrice = Number(payload.price);
        if (payload.isActive === undefined) payload.isActive = true;
        const plan = await Plan.create(payload);
        res.status(201).json(plan);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updatePlan = async (req, res) => {
    try {
        const payload = { ...req.body };
        if (payload.monthlyPrice === undefined && payload.price !== undefined) payload.monthlyPrice = Number(payload.price);
        if (payload.yearlyPrice === undefined && payload.price !== undefined) payload.yearlyPrice = Number(payload.price);
        const plan = await Plan.findByIdAndUpdate(req.params.id, payload, { new: true });
        res.json(plan);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deletePlan = async (req, res) => {
    try {
        await Plan.findByIdAndDelete(req.params.id);
        res.json({ message: 'Plan removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// --- SUPPORT TICKETS ---

export const getTickets = async (req, res) => {
    try {
        const tickets = await Ticket.find().populate('restaurantId', 'name email').sort({ createdAt: -1 });
        res.json(tickets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateTicket = async (req, res) => {
    try {
        const ticket = await Ticket.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
        res.json(ticket);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// --- RESTAURANT APPROVAL ---

export const updateApprovalStatus = async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        if (!restaurant) return res.status(404).json({ message: 'Restaurant not found' });
        
        if (req.body.approvalStatus) restaurant.approvalStatus = req.body.approvalStatus;
        if (req.body.commissionRate !== undefined) restaurant.commissionRate = req.body.commissionRate;
        
        await restaurant.save();
        res.json(restaurant);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get all notifications for Super Admin
// @route   GET /api/super-admin/notifications
// @access  Private/SuperAdmin
export const getSuperAdminNotifications = async (req, res) => {
    try {
        const notifications = await Notification.find({ type: 'System' }).sort({ createdAt: -1 });
        res.json(notifications);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Mark notification as read for Super Admin
// @route   PUT /api/super-admin/notifications/:id/read
// @access  Private/SuperAdmin
export const markSuperAdminNotificationAsRead = async (req, res) => {
    try {
        const notification = await Notification.findById(req.params.id);
        if (!notification) {
            return res.status(404).json({ message: 'Notification not found' });
        }
        notification.read = true;
        await notification.save();
        res.json(notification);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
