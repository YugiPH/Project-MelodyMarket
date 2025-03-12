import { AppDataSource } from "@database/data-source";
import { Category } from "@entity/categories";
import { Repository } from "typeorm";

export class CategoryService {
    private categoryRepository: Repository<Category>;

    constructor() {
        this.categoryRepository = AppDataSource.getRepository(Category);
    }

    async getAllCategories(): Promise<Category[]> {
        return this.categoryRepository.find();
    }
}
