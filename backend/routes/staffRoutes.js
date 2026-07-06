import express from 'express';
import { getStaff, createStaff, deleteStaff } from '../controllers/staffController.js';
import { protect, authorize, checkSubscription } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(protect);
router.use(authorize('RestaurantAdmin'));
router.use(checkSubscription);

router.route('/')
    .get(getStaff)
    .post(createStaff);

router.route('/:id')
    .delete(deleteStaff);

export default router;
