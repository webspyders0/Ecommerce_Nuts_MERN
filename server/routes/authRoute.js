import { Router } from "express";
import { adminLogin, logout, userLogin, userRegister } from "../controllers/authController.js";
import { authenticateUser } from "../middlewares/authenticateMiddleware.js";

const router = Router();
router.use(authenticateUser)
// Route handling for user registration
router.post('/register', userRegister);
router.post('/login', userLogin);
router.post('/login-admin', adminLogin);
router.post('/logout', logout)

export default router;