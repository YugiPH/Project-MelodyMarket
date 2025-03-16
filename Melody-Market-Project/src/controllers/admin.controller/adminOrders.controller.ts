import { Request, Response } from "express";
import { OrderService } from "@services/admin.service/adminOrders.service";

const orderService = new OrderService();

export default class OrderController {
    static async getOrders(req: Request, res: Response): Promise<Response> {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 8;
        const status = req.query.status as string | undefined;

        const result = await orderService.getOrders(page, limit, status);
        return res.json(result);
    }

    static async getOrderDetails(req: Request, res: Response): Promise<Response> {
        const orderId = parseInt(req.params.id);
        const details = await orderService.getOrderDetails(orderId);
        return res.json(details);
    }

    static async getOrderById(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.params.id);
        const order = await orderService.getOrderById(id);
        return order ? res.json(order) : res.status(404).json({ msg: "Không tìm thấy đơn hàng" });
    }

    static async updateOrderStatus(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.query.id as string);
        const status = req.query.status as string;
        const pay = req.query.pay === "true";

        const message = await orderService.updateOrderStatus(id, status, pay);
        return res.json({ msg: message });
    }

    static async getCompletedOrders(req: Request, res: Response): Promise<Response> {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 8;
        const getDate = req.query.getDate as string | undefined;

        const result = await orderService.getCompletedOrders(page, limit, getDate);
        return res.json(result);
    }
}
