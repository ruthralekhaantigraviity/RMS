import express from 'express';
import { getBranches, createBranch, updateBranch, deleteBranch } from '../controllers/branchController.js';
import { protect, authorize, checkSubscription } from '../middleware/authMiddleware.js';

const router = express.Router();

// Apply middleware to all routes in this file
router.use(protect);
router.use(authorize('RestaurantAdmin', 'SuperAdmin'));
router.use(checkSubscription);

router.route('/')
    .get(getBranches)
    .post(createBranch);

router.route('/:id')
    .put(updateBranch)
    .delete(deleteBranch);

export default router;
