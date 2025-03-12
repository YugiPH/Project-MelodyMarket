import { Request, Response } from "express";
import { DetailOrderService } from "@services/detail_orders.service";

const detailOrderService = new DetailOrderService();

class DetailOrderController {
    static async getDetailsByOrderId(req: Request, res: Response): Promise<Response> {
        const id_order = parseInt(req.params.id);
        const details = await detailOrderService.getDetailsByOrderId(id_order);
        return res.json(details);
    }

    static async createDetailOrder(req: Request, res: Response): Promise<Response> {
        const message = await detailOrderService.createDetailOrder(req.body);
        return res.json({ message });
    }
}

export default DetailOrderController;