import { Request, Response } from "express";
import { ProductService } from "@services/products.service";

const productService = new ProductService();

class ProductController {
    static async getAllProducts(req: Request, res: Response): Promise<Response> {
        const products = await productService.getAllProducts();
        return res.json(products);
    }

    static async getProductsByCategory(req: Request, res: Response): Promise<Response> {
        const id_category = req.query.id_category as string;
        const products = await productService.getProductsByCategory(id_category);
        return res.json(products);
    }

    static async getProductById(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.params.id);
        const product = await productService.getProductById(id);
        return product ? res.json(product) : res.status(404).json({ message: "Không tìm thấy sản phẩm" });
    }

    static async getPaginatedProducts(req: Request, res: Response): Promise<Response> {
        const page = parseInt(req.query.page as string) || 1;
        const count = parseInt(req.query.count as string) || 10;
        const search = req.query.search as string | undefined;
        const category = req.query.category as string | undefined;

        const products = await productService.getPaginatedProducts(page, count, search, category);
        return res.json(products);
    }

    static async getScrollProducts(req: Request, res: Response): Promise<Response> {
        const page = parseInt(req.query.page as string) || 1;
        const count = parseInt(req.query.count as string) || 10;
        const search = req.query.search as string || "";

        const products = await productService.getScrollProducts(page, count, search);
        return res.json(products);
    }
}

export default ProductController;
