import { Request, Response } from "express";
import { ProductService } from "@services/admin.service/adminProducts.service";
import { UploadedFile } from "express-fileupload";

const productService = new ProductService();

export default class ProductController {
    static async getProducts(req: Request, res: Response): Promise<Response> {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 8;
        const search = req.query.search as string | undefined;

        const result = await productService.getProducts(page, limit, search);
        return res.json(result);
    }

    static async createProduct(req: Request, res: Response): Promise<Response> {
        const imageFile = req.files ? req.files.file as UploadedFile : undefined;

        const message = await productService.createProduct(req.body, imageFile);
        return res.json({ msg: message });
    }

    static async deleteProduct(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.query.id as string);
        const message = await productService.deleteProduct(id);
        return res.json({ msg: message });
    }

    static async getProductById(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.params.id);
        const product = await productService.getProductById(id);
        return product ? res.json(product) : res.status(404).json({ msg: "Không tìm thấy sản phẩm" });
    }

    static async updateProduct(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.body.id);
        let imagePath: string | undefined;

        if (req.files && req.files.file) {
            const file = Array.isArray(req.files.file) ? req.files.file[0] : req.files.file; // Lấy file đầu tiên nếu là mảng

            if (file) {
                imagePath = `/img/${file.name}`;
                await file.mv(`./public${imagePath}`); // Di chuyển file vào thư mục public/img/
            }
        }

        const message = await productService.updateProduct(id, req.body, imagePath);
        return res.json({ msg: message });
    }
}
