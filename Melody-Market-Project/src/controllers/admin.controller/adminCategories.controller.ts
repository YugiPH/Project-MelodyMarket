import { Request, Response } from "express";
import { CategoryService } from "@services/admin.service/adminCategories.service";

const categoryService = new CategoryService();

export default class CategoryController {
    static async getCategories(req: Request, res: Response): Promise<Response> {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 8;
        const search = req.query.search as string | undefined;

        const result = await categoryService.getCategories(page, limit, search);
        return res.json(result);
    }

    static async createCategory(req: Request, res: Response): Promise<Response> {
        const name = req.body.name.toLowerCase().replace(/^.|\s\S/g, (a: string) => a.toUpperCase());

        const message = await categoryService.createCategory(name);
        return res.json({ msg: message });
    }

    static async updateCategory(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.params.id);
        const name = req.body.name.toLowerCase().replace(/^.|\s\S/g, (a: string) => a.toUpperCase());

        const message = await categoryService.updateCategory(id, name);
        return res.json({ msg: message });
    }

    static async deleteCategory(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.params.id);
        const message = await categoryService.deleteCategory(id);
        return res.json({ msg: message });
    }

    static async getCategoryById(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.params.id);
        const category = await categoryService.getCategoryById(id);
        return category ? res.json(category) : res.status(404).json({ msg: "Không tìm thấy danh mục" });
    }

    static async getProductsByCategory(req: Request, res: Response): Promise<Response> {
        const categoryId = parseInt(req.params.id);
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 8;
        const search = req.query.search as string | undefined;

        const result = await categoryService.getProductsByCategory(categoryId, page, limit, search);
        return res.json(result);
    }
}
