import express from 'express';
import { getCustomers, createCustomer } from '../controllers/customerController.js';
import { protect, authorize, checkSubscription } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(protect);
router.use(authorize('RestaurantAdmin', 'BranchManager'));
router.use(checkSubscription);

router.route('/')
    .get(getCustomers)
    .post(createCustomer);

export default router;
