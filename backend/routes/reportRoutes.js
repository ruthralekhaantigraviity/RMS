import express from 'express';
import { generateReport } from '../controllers/reportController.js';
import { protect, authorize, checkSubscription } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(protect);
router.use(authorize('RestaurantAdmin', 'BranchManager'));
router.use(checkSubscription);

router.route('/generate')
    .post(generateReport);

export default router;
