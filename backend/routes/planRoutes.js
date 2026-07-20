import express from 'express';
import { getPublicPlans } from '../controllers/planController.js';

const router = express.Router();

router.route('/')
    .get(getPublicPlans);

export default router;
