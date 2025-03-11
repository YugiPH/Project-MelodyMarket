import { AppDataSource } from "@database/data-source";
import { Products } from "@entity/products";
import { Category } from "@entity/categories";
import { Repository } from "typeorm";

export class ProductService {
    private productRepository: Repository<Products>;

    constructor() {
        this.productRepository = AppDataSource.getRepository(Products);
    }

    async getAllProducts(): Promise<Products[]> {
        return this.productRepository.find();
    }

    async getProductsByCategory(id_category: string): Promise<Products[]> {
        if (id_category === "all") {
            return this.productRepository.find();
        }
        return this.productRepository.find({ where: { id_category: { id: parseInt(id_category) } } });
    }

    async getProductById(id: number): Promise<Products | null> {
        return this.productRepository.findOne({ where: { id } });
    }

    async getPaginatedProducts(
        page: number,
        count: number,
        search?: string,
        category?: string
    ): Promise<Products[]> {
        let query = this.productRepository.createQueryBuilder("product");

        if (category && category !== "all") {
            query = query.where("product.id_category = :category", { category });
        }

        if (search) {
            query = query.andWhere("product.name_product LIKE :search OR product.price_product LIKE :search", {
                search: `%${search}%`,
            });
        }

        return query.skip((page - 1) * count).take(count).getMany();
    }

    async getScrollProducts(page: number, count: number, search: string): Promise<Products[]> {
        const query = this.productRepository.createQueryBuilder("product")
            .where("product.name_product LIKE :search", { search: `%${search}%` })
            .skip((page - 1) * count)
            .take(count);

        return query.getMany();
    }
}
