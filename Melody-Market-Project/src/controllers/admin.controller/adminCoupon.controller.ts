import { Request, Response } from "express";
import { CouponService } from "@services/admin.service/adminCoupon.service";

const couponService = new CouponService();

export default class CouponController {
    static async getCoupons(req: Request, res: Response): Promise<Response> {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 8;
        const search = req.query.search as string | undefined;

        const result = await couponService.getCoupons(page, limit, search);
        return res.json(result);
    }

    static async createCoupon(req: Request, res: Response): Promise<Response> {
        const message = await couponService.createCoupon(req.body);
        return res.json({ msg: message });
    }

    static async updateCoupon(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.params.id);
        const message = await couponService.updateCoupon(id, req.body);
        return res.json({ msg: message });
    }

    static async deleteCoupon(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.params.id);
        const message = await couponService.deleteCoupon(id);
        return res.json({ msg: message });
    }

    static async getCouponById(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.params.id);
        const coupon = await couponService.getCouponById(id);
        return coupon ? res.json(coupon) : res.status(404).json({ msg: "Không tìm thấy mã giảm giá" });
    }

    static async checkCoupon(req: Request, res: Response): Promise<Response> {
        const code = req.query.code as string;
        const id_user = parseInt(req.query.id_user as string);

        const result = await couponService.checkCoupon(code, id_user);
        return res.json(result);
    }

    static async useCoupon(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.params.id);
        const message = await couponService.useCoupon(id);
        return res.json({ msg: message });
    }
}
