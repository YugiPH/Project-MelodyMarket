import express, { Request, Response, Router } from "express";
import DetailOrderController from "@controllers/detail_orders.controller";

const router: Router = express.Router();

router.get("/detail-orders/:id", (req: Request, res: Response) => {
    DetailOrderController.getDetailsByOrderId(req, res);
});

router.post("/detail-orders/create", (req: Request, res: Response) => {
    DetailOrderController.createDetailOrder(req, res);
});

export default router;
