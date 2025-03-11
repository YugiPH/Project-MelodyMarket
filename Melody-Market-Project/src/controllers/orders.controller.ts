import { Request, Response } from "express";
import { OrderService } from "@services/orders.service";

const orderService = new OrderService();

export default class OrderController {
    static async createOrder(req: Request, res: Response): Promise<Response> {
        const order = await orderService.createOrder(req.body);
        return res.json(order);
    }

    // static async sendOrderEmail(req: Request, res: Response): Promise<Response> {
    //     const { id_order, fullname, phone, address, email, price, total } = req.body;
    //     const message = await orderService.sendOrderEmail(id_order, fullname, phone, address, email, price, total);
    //     return res.json({ message });
    // }

    static async getOrdersByUser(req: Request, res: Response): Promise<Response> {
        const userId = parseInt(req.params.id);
        const orders = await orderService.getOrdersByUser(userId);
        return res.json(orders);
    }

    static async getOrderDetail(req: Request, res: Response): Promise<Response> {
        const orderId = parseInt(req.params.id);
        const order = await orderService.getOrderDetail(orderId);
        return order ? res.json(order) : res.status(404).json({ message: "Không tìm thấy đơn hàng" });
    }
}
