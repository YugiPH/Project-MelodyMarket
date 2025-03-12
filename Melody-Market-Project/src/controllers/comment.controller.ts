import { Request, Response } from "express";
import { CommentService } from "@services/comment.service";

const commentService = new CommentService();

class CommentController {
    static async getCommentsByProduct(req: Request, res: Response): Promise<Response> {
        const id_product = parseInt(req.params.id);
        const comments = await commentService.getCommentsByProduct(id_product);
        return res.json(comments);
    }

    static async createComment(req: Request, res: Response): Promise<Response> {
        const id_product = parseInt(req.params.id);
        const { id_user, content, star } = req.body;

        const message = await commentService.createComment(id_product, id_user, content, star);
        return res.json({ message });
    }
}

export default CommentController;