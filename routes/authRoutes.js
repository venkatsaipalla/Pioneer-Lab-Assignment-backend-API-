import express from "express";
import { register, login, logout,test } from "../controllers/authController.js";

const router = express.Router();

router.get("/test", test);
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

export default router;
