import { Router } from "express";
import { getOrders, postOrder } from "../controllers/order.controller.js";

const router = Router();

router.get("/account/:email", getOrders);

router.post("/checkout", postOrder);

console.log("todo ok")

export default router