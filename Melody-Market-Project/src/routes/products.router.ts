import express, { Request, Response, Router } from "express";
import ProductController from "@controllers/products.controller";

const router: Router = express.Router();

router.get('/products', (req: Request, res: Response) => {
    ProductController.getAllProducts(req, res);
});

router.get('/products/category', (req: Request, res: Response) => {
    ProductController.getProductsByCategory(req, res);
});

router.get('/products/:id', (req: Request, res: Response) => {
    ProductController.getProductById(req, res);
});

router.get('/products/pagination', (req: Request, res: Response) => {
    ProductController.getPaginatedProducts(req, res);
});

router.get('/products/scroll', (req: Request, res: Response) => {
    ProductController.getScrollProducts(req, res);
});

export default router;
