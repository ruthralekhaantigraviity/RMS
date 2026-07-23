import express from 'express';
import { getDashboardAnalytics } from '../controllers/analyticsController.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/dashboard')
    .get(protect, authorize('SuperAdmin', 'RestaurantAdmin', 'Branch Manager'), getDashboardAnalytics);

export default router;
