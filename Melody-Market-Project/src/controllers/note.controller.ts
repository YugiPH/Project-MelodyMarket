import { Request, Response } from "express";
import { NoteService } from "@services/note.service";

const noteService = new NoteService();

class NoteController {
    static async createNote(req: Request, res: Response): Promise<Response> {
        const note = await noteService.createNote(req.body);
        return res.json(note);
    }

    static async getNoteById(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.params.id);
        const note = await noteService.getNoteById(id);
        return note ? res.json(note) : res.status(404).json({ message: "Không tìm thấy ghi chú" });
    }
}

export default NoteController;