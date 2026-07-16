import express from 'express';
import { getRolesSummary, createRole, updateRole, deleteRole } from '../controllers/roleController.js';
import { protect, authorize, checkSubscription } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(protect);
router.use(authorize('RestaurantAdmin'));
router.use(checkSubscription);

router.route('/')
    .get(getRolesSummary)
    .post(createRole);

router.route('/:id')
    .put(updateRole)
    .delete(deleteRole);

export default router;
