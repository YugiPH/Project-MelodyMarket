import { Request, Response } from "express";
import { DeliveryService } from "@services/delivery.service";

const deliveryService = new DeliveryService();

class DeliveryController {
    static async createDelivery(req: Request, res: Response): Promise<Response> {
        const delivery = await deliveryService.createDelivery(req.body);
        return res.json(delivery);
    }

    static async getDeliveryById(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        const delivery = await deliveryService.getDeliveryById(id);
        return delivery ? res.json(delivery) : res.status(404).json({ message: "Không tìm thấy đơn giao hàng" });
    }
}

export default DeliveryController;