import { AppDataSource } from "@database/data-source";
import { Note } from "@entity/note";
import { Repository } from "typeorm";

export class NoteService {
    private noteRepository: Repository<Note>;

    constructor() {
        this.noteRepository = AppDataSource.getRepository(Note);
    }

    async createNote(data: Partial<Note>): Promise<Note> {
        const note = this.noteRepository.create(data);
        return this.noteRepository.save(note);
    }

    async getNoteById(id: number): Promise<Note | null> {
        return this.noteRepository.findOne({ where: { id } });
    }
}
