import { Router } from "express";
import { pool } from '../db.js';
import {postLogin, patchPassword, postRegister} from '../controllers/user.controller.js'


const router = Router();

router.post("/login", postLogin);

router.post("/register", postRegister);

router.patch("/forgot-password", patchPassword);



router.get("/ping", async (req, res) => {
    const [result] = await pool.query("SELECT 'Pong' AS result")
    res.json(result[0].result)
})

export default router;