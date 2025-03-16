import { AppDataSource } from "@database/data-source";
import { Coupon } from "@entity/coupon";
import { Order } from "@entity/orders";
import { Repository } from "typeorm";

export class CouponService {
    private couponRepository: Repository<Coupon>;
    private orderRepository: Repository<Order>;

    constructor() {
        this.couponRepository = AppDataSource.getRepository(Coupon);
        this.orderRepository = AppDataSource.getRepository(Order);
    }

    async getCoupons(page: number, limit: number, search?: string) {
        const query = this.couponRepository.createQueryBuilder("coupon");

        if (search) {
            query.where("coupon.code LIKE :search OR coupon.promotion LIKE :search", {
                search: `%${search}%`
            });
        }

        const [coupons, total] = await query.skip((page - 1) * limit).take(limit).getManyAndCount();

        return { coupons, totalPage: Math.ceil(total / limit) };
    }

    async createCoupon(data: Partial<Coupon>): Promise<string> {
        const newCoupon = this.couponRepository.create(data);
        await this.couponRepository.save(newCoupon);
        return "Bạn đã thêm thành công";
    }

    async updateCoupon(id: number, data: Partial<Coupon>): Promise<string> {
        const coupon = await this.couponRepository.findOne({ where: { id } });

        if (!coupon) {
            return "Không tìm thấy mã giảm giá";
        }

        coupon.code = data.code ?? coupon.code;
        coupon.count = data.count ?? coupon.count;
        coupon.promotion = data.promotion ?? coupon.promotion;
        coupon.describe = data.describe ?? coupon.describe;

        await this.couponRepository.save(coupon);
        return "Bạn đã cập nhật thành công";
    }

    async deleteCoupon(id: number): Promise<string> {
        const result = await this.couponRepository.delete(id);
        return result.affected ? "Xóa thành công" : "Không tìm thấy mã giảm giá";
    }

    async getCouponById(id: number): Promise<Coupon | null> {
        return this.couponRepository.findOne({ where: { id } });
    }

    async checkCoupon(code: string, id_user: number): Promise<{ msg: string; coupon?: Coupon }> {
        const coupon = await this.couponRepository.findOne({ where: { code } });

        if (!coupon) {
            return { msg: "Không tìm thấy" };
        }

        const checkCoupon = await this.orderRepository.findOne({
            where: {
                id_user: { id: id_user },
                id_coupon: { id: coupon.id } // Đảm bảo id_coupon là object
            }
        });

        if (checkCoupon) {
            return { msg: "Bạn đã sử dụng mã này rồi" };
        }

        return { msg: "Thành công", coupon };
    }


    async useCoupon(id: number): Promise<string> {
        const coupon = await this.couponRepository.findOne({ where: { id } });

        if (!coupon) {
            return "Không tìm thấy mã giảm giá";
        }

        // Kiểm tra nếu count là undefined thì đặt về 0
        if (coupon.count === undefined || coupon.count <= 0) {
            return "Mã giảm giá đã hết lượt sử dụng";
        }

        coupon.count = Math.max(0, coupon.count - 1);
        await this.couponRepository.save(coupon);
        return "Bạn đã sử dụng mã thành công";
    }

}
