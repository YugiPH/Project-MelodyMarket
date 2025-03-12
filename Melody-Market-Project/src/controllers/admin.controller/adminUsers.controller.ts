import { Request, Response } from "express";
import { AdminUserService } from "@services/admin.service/adminUsers.service";

const adminUserService = new AdminUserService();

export default class AdminUserController {
    static async getUsers(req: Request, res: Response): Promise<Response> {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 8;
        const search = req.query.search as string | undefined;
        const permission = req.query.permission ? parseInt(req.query.permission as string) : undefined;

        const result = await adminUserService.getUsers(page, limit, search, permission);
        return res.json(result);
    }

    static async createUser(req: Request, res: Response): Promise<Response> {
        const { fullname, username, password, email, permission } = req.body;
        const message = await adminUserService.createUser(fullname, username, password, email, permission);
        return res.json({ msg: message });
    }

    static async deleteUser(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.query.id as string);
        const message = await adminUserService.deleteUser(id);
        return res.json({ msg: message });
    }

    static async getUserDetails(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.params.id);
        const user = await adminUserService.getUserDetails(id);
        return user ? res.json(user) : res.status(404).json({ msg: "Không tìm thấy user" });
    }

    static async updateUser(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.query.id as string);
        const { fullname, password, permission } = req.body;
        const message = await adminUserService.updateUser(id, fullname, password, permission);
        return res.json({ msg: message });
    }

    static async login(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body;
        const result = await adminUserService.login(email, password);
        return res.json(result);
    }
}
