import express, { Request, Response, Router } from "express";
import OrderController from "@controllers/orders.controller";

const router: Router = express.Router();

router.post("/orders/create", (req: Request, res: Response) => {
    OrderController.createOrder(req, res);
});

// router.post("/orders/send-mail", (req: Request, res: Response) => {
//     OrderController.sendOrderEmail(req, res);
// });

router.get("/orders/user/:id", (req: Request, res: Response) => {
    OrderController.getOrdersByUser(req, res);
});

router.get("/orders/:id/detail", (req: Request, res: Response) => {
    OrderController.getOrderDetail(req, res);
});

export default router;
