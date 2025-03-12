import express, { Request, Response, Router } from "express";
import ProductController from "@controllers/admin.controller/adminProducts.controller";

const router: Router = express.Router();

router.get("/products", (req: Request, res: Response) => {
    ProductController.getProducts(req, res);
});

router.post("/products/create", (req: Request, res: Response) => {
    ProductController.createProduct(req, res);
});

router.delete("/products/delete", (req: Request, res: Response) => {
    ProductController.deleteProduct(req, res);
});

router.get("/products/:id", (req: Request, res: Response) => {
    ProductController.getProductById(req, res);
});

router.put("/products/update", (req: Request, res: Response) => {
    ProductController.updateProduct(req, res);
});

export default router;
