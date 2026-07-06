import express from 'express';
import { getTaxes, createTax, updateTax, deleteTax } from '../controllers/taxController.js';
import { protect, authorize, checkSubscription } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(protect);
router.use(authorize('RestaurantAdmin', 'BranchManager'));
router.use(checkSubscription);

router.route('/')
    .get(getTaxes)
    .post(createTax);

router.route('/:id')
    .put(updateTax)
    .delete(deleteTax);

export default router;
