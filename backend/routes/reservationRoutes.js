import express from 'express';
import { getReservations, createReservation, updateReservationStatus } from '../controllers/reservationController.js';
import { protect, authorize, checkSubscription } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(protect);
router.use(authorize('RestaurantAdmin', 'BranchManager', 'Waiter'));
router.use(checkSubscription);

router.route('/')
    .get(getReservations)
    .post(createReservation);

router.route('/:id/status')
    .patch(updateReservationStatus);

export default router;
