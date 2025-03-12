import { AppDataSource } from "@database/data-source";
import { Products } from "@entity/products";
import { Sale } from "@entity/sale";
import { Repository } from "typeorm";

export class SaleService {
    private saleRepository: Repository<Sale>;

    constructor() {
        this.saleRepository = AppDataSource.getRepository(Sale);
    }

    async getSales(page: number, limit: number, search?: string) {
        const query = this.saleRepository.createQueryBuilder("sale").leftJoinAndSelect("sale.id_product", "product");

        if (search) {
            query.where("sale.id LIKE :search", { search: `%${search}%` });
        }

        const [sales, total] = await query.skip((page - 1) * limit).take(limit).getManyAndCount();

        return { sales, totalPage: Math.ceil(total / limit) };
    }

    async createSale(data: Partial<Sale>): Promise<string> {
        if (!data.id_product || !data.id_product.id) {
            return "ID sản phẩm không hợp lệ";
        }
    
        const existingSales = await this.saleRepository.find({
            where: { id_product: { id: data.id_product.id } }
        });
    
        const hasActiveSale = existingSales.some((sale) => sale.status === true);
    
        if (hasActiveSale) {
            return "Sản phẩm này đã có khuyến mãi";
        }
    
        const newSale = this.saleRepository.create({
            ...data,
            id_product: { id: data.id_product.id } // Chỉ lấy ID, không gán cả object
        });
    
        await this.saleRepository.save(newSale);
        return "Bạn đã thêm thành công";
    }
    

    async getSaleById(id: number): Promise<Sale | null> {
        return this.saleRepository.findOne({ where: { id } });
    }

    async updateSale(id: number, data: Partial<Sale>): Promise<string> {
        const sale = await this.saleRepository.findOne({ where: { id } });
    
        if (!sale) {
            return "Không tìm thấy khuyến mãi";
        }
    
        sale.promotion = data.promotion ?? sale.promotion;
        sale.describe = data.describe ?? sale.describe;
        sale.status = data.status ?? sale.status;
    
        if (data.id_product && typeof data.id_product === "number") {
            const product = await AppDataSource.getRepository(Products).findOne({ where: { id: data.id_product } });
    
            if (!product) {
                return "Không tìm thấy sản phẩm";
            }
    
            sale.id_product = product;
        }
    
        await this.saleRepository.save(sale);
        return "Bạn đã cập nhật thành công";
    }
    

    async getActiveSales(): Promise<Sale[]> {
        return this.saleRepository.find({
            where: { status: true },
            relations: ["id_product"]
        });
    }

    async getSaleByProduct(id_product: number): Promise<{ msg: string; sale?: Sale }> {
        const sale = await this.saleRepository.findOne({
            where: { id_product: { id: id_product }, status: true },
            relations: ["id_product"]
        });

        return sale ? { msg: "Thành công", sale } : { msg: "Thất bại" };
    }
}
