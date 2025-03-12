import express, { Request, Response, Router } from "express";
import CategoryController from "@controllers/categories.controller";

const router: Router = express.Router();

router.get("/categories", (req: Request, res: Response) => {
    CategoryController.getAllCategories(req, res);
});

export default router;
