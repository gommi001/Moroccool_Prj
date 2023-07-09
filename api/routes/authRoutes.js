import express  from "express";
import { login, register } from "../controllers/authController.js";
import { verifyUser } from "../utils/verifyToken.js";

const router = express.Router()

// Register User
router.post('/register', register)

// User Login
router.post('/login', login)


export default router