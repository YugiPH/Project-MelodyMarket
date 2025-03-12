import { AppDataSource } from "@database/data-source";
import { Category } from "@entity/categories";
import { Products } from "@entity/products";
import { Repository } from "typeorm";
import path from "path";
import fs from "fs";
import { UploadedFile } from "express-fileupload";

export class ProductService {
    private productRepository: Repository<Products>;

    constructor() {
        this.productRepository = AppDataSource.getRepository(Products);
    }

    async getProducts(page: number, limit: number, search?: string) {
        const query = this.productRepository.createQueryBuilder("product").leftJoinAndSelect("product.id_category", "category");

        if (search) {
            query.where("product.name_product LIKE :search OR product.price_product LIKE :search OR product.id LIKE :search", {
                search: `%${search}%`
            });
        }

        const [products, total] = await query.skip((page - 1) * limit).take(limit).getManyAndCount();

        return { products, totalPage: Math.ceil(total / limit) };
    }

    async createProduct(data: Partial<Products>, imageFile?: UploadedFile): Promise<string> {
        const existingProduct = await this.productRepository.findOne({ where: { name_product: data.name_product } });

        if (existingProduct) {
            return "Sản phẩm đã tồn tại";
        }

        let imageUrl = "http://localhost:8000/img/nophoto.jpg"; // Ảnh mặc định

        if (imageFile) {
            const uploadDir = path.join(__dirname, "../../public/img/");
            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir, { recursive: true });
            }

            const imageName = `${Date.now()}_${imageFile.name}`;
            const imagePath = path.join(uploadDir, imageName);
            await imageFile.mv(imagePath);

            imageUrl = `http://localhost:8000/img/${imageName}`;
        }

        const newProduct = this.productRepository.create({
            ...data,
            image: imageUrl
        });

        await this.productRepository.save(newProduct);
        return "Bạn đã thêm thành công";
    }

    async deleteProduct(id: number): Promise<string> {
        const result = await this.productRepository.delete(id);
        return result.affected ? "Xóa thành công" : "Không tìm thấy sản phẩm";
    }

    async getProductById(id: number): Promise<Products | null> {
        return this.productRepository.findOne({ where: { id } });
    }

    async updateProduct(id: number, data: Partial<Products>, imagePath?: string): Promise<string> {
        const existingProduct = await this.productRepository.findOne({ where: { id } });

        if (!existingProduct) {
            return "Không tìm thấy sản phẩm";
        }

        existingProduct.name_product = data.name_product ?? existingProduct.name_product;
        existingProduct.price_product = data.price_product ?? existingProduct.price_product;
        existingProduct.describe = data.describe ?? existingProduct.describe;
        existingProduct.image = imagePath ?? existingProduct.image;

        // Nếu có `id_category`, tìm kiếm category từ database trước khi gán
        if (data.id_category && typeof data.id_category === "number") {
            const category = await AppDataSource.getRepository(Category).findOne({ where: { id: data.id_category } });

            if (!category) {
                return "Không tìm thấy danh mục";
            }

            existingProduct.id_category = category;
        }

        await this.productRepository.save(existingProduct);
        return "Bạn đã cập nhật thành công";
    }
}
