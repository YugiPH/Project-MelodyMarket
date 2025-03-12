import express, { Request, Response, Router } from "express";
import CommentController from "@controllers/comment.controller";

const router: Router = express.Router();

router.get("/comments/:id", (req: Request, res: Response) => {
    CommentController.getCommentsByProduct(req, res);
});

router.post("/comments/:id/create", (req: Request, res: Response) => {
    CommentController.createComment(req, res);
});

export default router;
