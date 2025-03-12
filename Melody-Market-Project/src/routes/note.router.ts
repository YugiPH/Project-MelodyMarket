import express, { Request, Response, Router } from "express";
import NoteController from "@controllers/note.controller";

const router: Router = express.Router();

router.post("/notes/create", (req: Request, res: Response) => {
    NoteController.createNote(req, res);
});

router.get("/notes/:id", (req: Request, res: Response) => {
    NoteController.getNoteById(req, res);
});

export default router;
