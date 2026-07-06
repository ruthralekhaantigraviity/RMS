import express from 'express';
import { getTables, createTable, updateTableStatus } from '../controllers/tableController.js';
import { authorize } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
    .get(authorize('Admin', 'Manager', 'Waiter', 'Cashier'), getTables)
    .post(authorize('Admin', 'Manager'), createTable);

router.route('/:id/status')
    .put(authorize('Admin', 'Manager', 'Waiter', 'Cashier'), updateTableStatus);

export default router;
