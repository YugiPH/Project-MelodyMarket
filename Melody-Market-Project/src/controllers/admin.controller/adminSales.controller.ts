import { Request, Response } from "express";
import { SaleService } from "@services/admin.service/adminSales.service";

const saleService = new SaleService();

class SaleController {
    static async getSales(req: Request, res: Response): Promise<Response> {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 8;
        const search = req.query.search as string | undefined;

        const result = await saleService.getSales(page, limit, search);
        return res.json(result);
    }

    static async createSale(req: Request, res: Response): Promise<Response> {
        const message = await saleService.createSale(req.body);
        return res.json({ msg: message });
    }

    static async getSaleById(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.params.id);
        const sale = await saleService.getSaleById(id);
        return sale ? res.json(sale) : res.status(404).json({ msg: "Không tìm thấy khuyến mãi" });
    }

    static async updateSale(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.params.id);
        const message = await saleService.updateSale(id, req.body);
        return res.json({ msg: message });
    }

    static async getActiveSales(req: Request, res: Response): Promise<Response> {
        const sales = await saleService.getActiveSales();
        return res.json(sales);
    }

    static async getSaleByProduct(req: Request, res: Response): Promise<Response> {
        const id_product = parseInt(req.params.id);
        const result = await saleService.getSaleByProduct(id_product);
        return res.json(result);
    }
}

export default SaleController;