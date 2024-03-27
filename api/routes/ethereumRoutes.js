// ethereumRoutes.js
import express from 'express';
import { getEthBalance } from '../controllers/ethereumController.js';

const router = express.Router();

// Route to get Ethereum account balance
router.get('/:address', getEthBalance);

export default router;
