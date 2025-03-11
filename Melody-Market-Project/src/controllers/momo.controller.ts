import { Request, Response } from "express";
import { MomoService } from "@services/momo.service";

const momoService = new MomoService();

export default class MomoController {
    static async processPayment(req: Request, res: Response): Promise<Response> {
        const data = req.body;

        if (!momoService.verifySignature(data)) {
            return res.status(400).json({ message: "Thông tin request không hợp lệ" });
        }

        return res.json({ message: data.errorCode === 0 ? "Thanh toán thành công" : "Thanh toán thất bại" });
    }
}
