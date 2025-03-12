import { AppDataSource } from "@database/data-source";
import { Comment } from "@entity/comment";
import { Repository } from "typeorm";

export class CommentService {
    private commentRepository: Repository<Comment>;

    constructor() {
        this.commentRepository = AppDataSource.getRepository(Comment);
    }

    async getCommentsByProduct(id_product: number): Promise<Comment[]> {
        return this.commentRepository.find({
            where: { id_product: { id: id_product } },
            relations: ["id_user"]
        });
    }

    async createComment(id_product: number, id_user: number, content: string, star: number): Promise<string> {
        const newComment = this.commentRepository.create({
            id_product: { id: id_product },
            id_user: { id: id_user },
            content,
            star
        });

        await this.commentRepository.save(newComment);
        return "Thành công";
    }
}
