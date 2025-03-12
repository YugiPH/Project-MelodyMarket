import { AppDataSource } from "@database/data-source";
import { Detail_Order } from "@entity/order_details";
import { Repository } from "typeorm";

export class DetailOrderService {
    private detailOrderRepository: Repository<Detail_Order>;

    constructor() {
        this.detailOrderRepository = AppDataSource.getRepository(Detail_Order);
    }

    async getDetailsByOrderId(id_order: number): Promise<Detail_Order[]> {
        return this.detailOrderRepository.find({
            where: { id_order: { id: id_order } },
            relations: ["id_product"]
        });
    }

    async createDetailOrder(data: Partial<Detail_Order>): Promise<string> {
        const detailOrder = this.detailOrderRepository.create(data);
        await this.detailOrderRepository.save(detailOrder);
        return "Thành công";
    }
}
