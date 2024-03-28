// ethereumRoutes.js
import express from 'express';
import { getEthBalance } from '../controllers/ethereumController.js';
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// Route to get Ethereum account balance
router.get('/:address',verifyToken, getEthBalance);

export default router;
