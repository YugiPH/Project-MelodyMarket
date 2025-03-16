import { AppDataSource } from "@database/data-source";
import { Category } from "@entity/categories";
import { Products } from "@entity/products";
import { Repository } from "typeorm";

export class CategoryService {
    private categoryRepository: Repository<Category>;
    private productRepository: Repository<Products>;

    constructor() {
        this.categoryRepository = AppDataSource.getRepository(Category);
        this.productRepository = AppDataSource.getRepository(Products);
    }

    async getCategories(page: number, limit: number, search?: string) {
        const query = this.categoryRepository.createQueryBuilder("category");

        if (search) {
            query.where("category.name LIKE :search", { search: `%${search}%` });
        }

        const [categories, total] = await query.skip((page - 1) * limit).take(limit).getManyAndCount();

        return { categories, totalPage: Math.ceil(total / limit) };
    }

    async createCategory(category: string): Promise<string> {
        const existingCategory = await this.categoryRepository.findOne({ where: { category } });

        if (existingCategory) {
            return "Danh mục đã tồn tại";
        }

        const newCategory = this.categoryRepository.create({ category });
        await this.categoryRepository.save(newCategory);
        return "Bạn đã thêm danh mục thành công";
    }

    async updateCategory(id: number, category: string): Promise<string> {
        const categories = await this.categoryRepository.findOne({ where: { id } });

        if (!categories) {
            return "Không tìm thấy danh mục";
        }

        const duplicateCategory = await this.categoryRepository.findOne({ where: { category } });

        if (duplicateCategory && duplicateCategory.id !== id) {
            return "Danh mục đã tồn tại";
        }

        categories.category = category;
        await this.categoryRepository.save(categories);
        return "Bạn đã cập nhật danh mục thành công";
    }

    async deleteCategory(id: number): Promise<string> {
        const result = await this.categoryRepository.delete(id);
        return result.affected ? "Xóa danh mục thành công" : "Không tìm thấy danh mục";
    }

    async getCategoryById(id: number): Promise<Category | null> {
        return this.categoryRepository.findOne({ where: { id } });
    }

    async getProductsByCategory(categoryId: number, page: number, limit: number, search?: string) {
        const query = this.productRepository.createQueryBuilder("product")
            .where("product.id_category = :categoryId", { categoryId });

        if (search) {
            query.andWhere("product.name_product LIKE :search", { search: `%${search}%` });
        }

        const [products, total] = await query.skip((page - 1) * limit).take(limit).getManyAndCount();

        return { products, totalPage: Math.ceil(total / limit) };
    }
}
