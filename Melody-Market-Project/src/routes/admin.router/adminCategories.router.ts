import express, { Request, Response, Router } from "express";
import CategoryController from "@controllers/admin.controller/adminCategories.controller";

const router: Router = express.Router();

router.get("/categories", (req: Request, res: Response) => {
    CategoryController.getCategories(req, res);
});

router.post("/categories/create", (req: Request, res: Response) => {
    CategoryController.createCategory(req, res);
});

router.put("/categories/update/:id", (req: Request, res: Response) => {
    CategoryController.updateCategory(req, res);
});

router.delete("/categories/delete/:id", (req: Request, res: Response) => {
    CategoryController.deleteCategory(req, res);
});

router.get("/categories/:id", (req: Request, res: Response) => {
    CategoryController.getCategoryById(req, res);
});

router.get("/categories/:id/products", (req: Request, res: Response) => {
    CategoryController.getProductsByCategory(req, res);
});

export default router;
