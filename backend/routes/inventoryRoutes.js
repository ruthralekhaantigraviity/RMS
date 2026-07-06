import express from 'express';
import { getInventory, createInventoryItem, updateInventoryItem, deleteInventoryItem, logWastage } from '../controllers/inventoryController.js';
import { protect, authorize, checkSubscription } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(protect);
router.use(authorize('RestaurantAdmin', 'BranchManager', 'Chef', 'Staff'));
router.use(checkSubscription);

router.post('/wastage', logWastage);

router.route('/')
    .get(getInventory)
    .post(createInventoryItem);

router.route('/:id')
    .put(updateInventoryItem)
    .delete(deleteInventoryItem);

export default router;
