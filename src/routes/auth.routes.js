import { Router } from 'express';
import { register, login, me } from '../controllers/auth.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { validate } from '../middlewares/validate.middleware.js';
import registerSchema from '../dto/register.dto.js';
import loginSchema from '../dto/login.dto.js';

/**
 * TODO: Define auth routes
 *
 * POST   /register  → register (no auth required)
 * POST   /login     → login (no auth required)
 * GET    /me        → me (requires authenticate middleware)
 */

const router = Router();

// Your routes here
router.post("/register", validate(registerSchema), register);
router.post("/login", validate(loginSchema), login);


export default router;
