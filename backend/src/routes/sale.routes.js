import express from 'express';
import { createSale, getSales } from '../controllers/sale.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/', authMiddleware, createSale);
router.get('/', authMiddleware, getSales);

export default router;