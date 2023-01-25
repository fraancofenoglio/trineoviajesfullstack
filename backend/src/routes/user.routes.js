import { Router } from "express";
import { pool } from '../db.js';
import {postLogin, patchPassword, postRegister} from '../controllers/user.controller.js'


const router = Router();

router.post("/login", postLogin);

router.post("/register", postRegister);

router.patch("/forgot-password", patchPassword);

export default router;