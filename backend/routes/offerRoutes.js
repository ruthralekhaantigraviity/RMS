import express from 'express';
import { getOffers, createOffer, deleteOffer } from '../controllers/offerController.js';
import { protect, authorize, checkSubscription } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(protect);
router.use(authorize('RestaurantAdmin', 'BranchManager'));
router.use(checkSubscription);

router.route('/')
    .get(getOffers)
    .post(createOffer);

router.route('/:id')
    .delete(deleteOffer);

export default router;
