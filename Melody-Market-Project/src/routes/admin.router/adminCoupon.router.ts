import express, { Request, Response, Router } from "express";
import CouponController from "@controllers/admin.controller/adminCoupon.controller";

const router: Router = express.Router();

router.get("/coupons", (req: Request, res: Response) => {
    CouponController.getCoupons(req, res);
});

router.post("/coupons/create", (req: Request, res: Response) => {
    CouponController.createCoupon(req, res);
});

router.put("/coupons/update/:id", (req: Request, res: Response) => {
    CouponController.updateCoupon(req, res);
});

router.delete("/coupons/delete/:id", (req: Request, res: Response) => {
    CouponController.deleteCoupon(req, res);
});

router.get("/coupons/:id", (req: Request, res: Response) => {
    CouponController.getCouponById(req, res);
});

router.get("/coupons/check", (req: Request, res: Response) => {
    CouponController.checkCoupon(req, res);
});

router.patch("/coupons/use/:id", (req: Request, res: Response) => {
    CouponController.useCoupon(req, res);
});

export default router;
