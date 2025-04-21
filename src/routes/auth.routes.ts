import { Router } from 'express';
import { signInWithGoogle } from '../controllers/auth.controller';


const router = Router();
router.post('/auth/google', signInWithGoogle);
export default router;
