import { Router } from 'express';
import { loginController } from '../controllers/auth.controller.js';

const router = Router();

// POST /auth/login - Devuelve el Bearer token si son válidas[cite: 1]
router.post('/login', loginController);

export default router;