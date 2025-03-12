import express, { Request, Response, Router } from "express";
import DeliveryController from "@controllers/delivery.controller";

const router: Router = express.Router();

router.post("/delivery/create", (req: Request, res: Response) => {
    DeliveryController.createDelivery(req, res);
});

router.get("/delivery/:id", (req: Request, res: Response) => {
    DeliveryController.getDeliveryById(req, res);
});

export default router;
