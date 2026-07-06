import express from 'express';
import { getRolesSummary } from '../controllers/roleController.js';
import { protect, authorize, checkSubscription } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(protect);
router.use(authorize('RestaurantAdmin'));
router.use(checkSubscription);

router.route('/')
    .get(getRolesSummary);

export default router;
