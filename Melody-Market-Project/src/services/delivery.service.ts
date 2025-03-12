import { AppDataSource } from "@database/data-source";
import { Delivery } from "@entity/delivery";
import { Repository } from "typeorm";

export class DeliveryService {
    private deliveryRepository: Repository<Delivery>;

    constructor() {
        this.deliveryRepository = AppDataSource.getRepository(Delivery);
    }

    async createDelivery(data: Partial<Delivery>): Promise<Delivery> {
        const delivery = this.deliveryRepository.create(data);
        return this.deliveryRepository.save(delivery);
    }

    async getDeliveryById(id: string): Promise<Delivery | null> {
        return this.deliveryRepository.findOne({ where: { id_delivery: id } });
    }
}
