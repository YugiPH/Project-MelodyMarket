import { Request, Response } from "express";
import { CategoryService } from "@services/catergories.service";

const categoryService = new CategoryService();

class CategoryController {
    static async getAllCategories(req: Request, res: Response): Promise<Response> {
        const categories = await categoryService.getAllCategories();
        return res.json(categories);
    }
}

export default CategoryController;