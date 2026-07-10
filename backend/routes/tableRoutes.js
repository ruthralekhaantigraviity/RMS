import express from 'express';
import { getTables, createTable, updateTableStatus } from '../controllers/tableController.js';
import { authorize, protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
    .get(protect, authorize('Admin', 'RestaurantAdmin', 'Manager', 'Waiter', 'Cashier'), getTables)
    .post(protect, authorize('Admin', 'RestaurantAdmin', 'Manager'), createTable);

router.route('/:id/status')
    .put(protect, authorize('Admin', 'RestaurantAdmin', 'Manager', 'Waiter', 'Cashier'), updateTableStatus);

export default router;
