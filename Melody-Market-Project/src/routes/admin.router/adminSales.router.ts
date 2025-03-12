import express, { Request, Response, Router } from "express";
import SaleController from "@controllers/admin.controller/adminSales.controller";

const router: Router = express.Router();

router.get("/sales", (req: Request, res: Response) => {
    SaleController.getSales(req, res);
});

router.post("/sales/create", (req: Request, res: Response) => {
    SaleController.createSale(req, res);
});

router.get("/sales/:id", (req: Request, res: Response) => {
    SaleController.getSaleById(req, res);
});

router.put("/sales/:id/update", (req: Request, res: Response) => {
    SaleController.updateSale(req, res);
});

router.get("/sales/active", (req: Request, res: Response) => {
    SaleController.getActiveSales(req, res);
});

router.get("/sales/product/:id", (req: Request, res: Response) => {
    SaleController.getSaleByProduct(req, res);
});

export default router;
