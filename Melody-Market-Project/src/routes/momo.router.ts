import express, { Request, Response, Router } from "express";
import MomoController from "@controllers/momo.controller";

const router: Router = express.Router();

router.post("/momo/payment", (req: Request, res: Response) => {
    MomoController.processPayment(req, res);
});

export default router;
