import { Router } from "express";
import { userLogin, userRegister} from "../controllers/authController.js";

const router = Router();

// Route handling for user registration
router.post('/register', userRegister);
router.post('/login', userLogin);

export default router;