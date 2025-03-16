import express, { Request, Response, Router } from "express";
import OrderController from "@controllers/admin.controller/adminOrders.controller";

const router: Router = express.Router();

router.get("/orders", (req: Request, res: Response) => {
    OrderController.getOrders(req, res);
});

router.get("/orders/details/:id", (req: Request, res: Response) => {
    OrderController.getOrderDetails(req, res);
});

router.get("/orders/:id", (req: Request, res: Response) => {
    OrderController.getOrderById(req, res);
});

router.patch("/orders/update-status", (req: Request, res: Response) => {
    OrderController.updateOrderStatus(req, res);
});

router.get("/orders/completed", (req: Request, res: Response) => {
    OrderController.getCompletedOrders(req, res);
});

export default router;
