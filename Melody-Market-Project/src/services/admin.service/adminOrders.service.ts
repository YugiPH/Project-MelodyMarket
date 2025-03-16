import { AppDataSource } from "@database/data-source";
import { Order } from "@entity/orders";
import { Detail_Order } from "@entity/order_details";
import { Repository } from "typeorm";

export class OrderService {
    private orderRepository: Repository<Order>;
    private detailOrderRepository: Repository<Detail_Order>;

    constructor() {
        this.orderRepository = AppDataSource.getRepository(Order);
        this.detailOrderRepository = AppDataSource.getRepository(Detail_Order);
    }

    async getOrders(page: number, limit: number, status?: string) {
        const query = this.orderRepository.createQueryBuilder("order")
            .leftJoinAndSelect("order.id_user", "user")
            .leftJoinAndSelect("order.id_payment", "payment")
            .leftJoinAndSelect("order.id_note", "note");

        if (status) {
            query.where("order.status = :status", { status });
        }

        const [orders, total] = await query.orderBy("order.id", "DESC").skip((page - 1) * limit).take(limit).getManyAndCount();

        const totalMoney = orders.reduce((sum, order) => sum + Number(order.total), 0);

        return { orders, totalPage: Math.ceil(total / limit), totalMoney };
    }

    async getOrderDetails(orderId: number) {
        return this.detailOrderRepository.find({
            where: { id_order: { id: orderId } },
            relations: ["id_order", "id_product"]
        });
    }

    async getOrderById(id: number) {
        return this.orderRepository.findOne({
            where: { id },
            relations: ["id_user", "id_payment", "id_note"]
        });
    }

    async updateOrderStatus(id: number, status: string, pay?: boolean) {
        const order = await this.orderRepository.findOne({ where: { id } });

        if (!order) {
            return "Không tìm thấy đơn hàng";
        }

        order.status = status;
        if (pay !== undefined) {
            order.pay = pay;
        }

        await this.orderRepository.save(order);
        return "Cập nhật trạng thái đơn hàng thành công";
    }

    async getCompletedOrders(page: number, limit: number, getDate?: string) {
        const query = this.orderRepository.createQueryBuilder("order")
            .where("order.status = :status", { status: "4" })
            .leftJoinAndSelect("order.id_user", "user")
            .leftJoinAndSelect("order.id_payment", "payment")
            .leftJoinAndSelect("order.id_note", "note");

        if (getDate) {
            query.andWhere("order.create_time LIKE :date", { date: `%${getDate}%` });
        }

        const [orders, total] = await query.orderBy("order.id", "DESC").skip((page - 1) * limit).take(limit).getManyAndCount();

        const totalMoney = orders.reduce((sum, order) => sum + Number(order.total), 0);

        return { orders, totalPage: Math.ceil(total / limit), totalMoney };
    }
}
