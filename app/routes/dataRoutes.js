import express from "express";
import { fetchData, filterData } from "../controllers/dataController.js";
import { verifyToken } from "../app/middleware/authMiddleware.js";

const router = express.Router();

router.get("/", fetchData);
router.get("/filter", verifyToken, fetchData);

export default router;
