import { Router } from 'express';
import login from '../controllers/auth';

const router = Router();


router.post('/login', login);   //ruta del login


export default router;