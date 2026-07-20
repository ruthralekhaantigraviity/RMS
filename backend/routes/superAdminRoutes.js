import express from 'express';
import { getStats, getRestaurants, updateSubscription, deleteRestaurant, getPlans, createPlan, updatePlan, deletePlan, getTickets, updateTicket, updateApprovalStatus } from '../controllers/superAdminController.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(protect, authorize('SuperAdmin'));

router.route('/stats').get(getStats);
router.route('/restaurants').get(getRestaurants);
router.route('/restaurants/:id').delete(deleteRestaurant);
router.route('/restaurants/:id/subscription').put(updateSubscription);
router.route('/restaurants/:id/approval').put(updateApprovalStatus);

router.route('/plans')
    .get(getPlans)
    .post(createPlan);
router.route('/plans/:id')
    .put(updatePlan)
    .delete(deletePlan);

router.route('/tickets')
    .get(getTickets);
router.route('/tickets/:id')
    .put(updateTicket);

export default router;
