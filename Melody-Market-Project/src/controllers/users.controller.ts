import { Request, Response } from "express";
import { UserService } from "@services/users.service";

const userService = new UserService();

class UserController {
    static async getAllUsers(req: Request, res: Response): Promise<Response> {
        const users = await userService.getAllUsers();
        return res.json(users);
    }

    static async getUserById(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.params.id);
        const user = await userService.getUserById(id);
        return user ? res.json(user) : res.status(404).json({ message: "User không tồn tại" });
    }

    static async getUserByUsernameOrEmail(req: Request, res: Response): Promise<Response> {
        const { username, password } = req.query;
        if (typeof username !== "string" || typeof password !== "string") {
            return res.status(400).json({ message: "Thiếu username hoặc password" });
        }

        const user = await userService.getUserByUsernameOrEmail(username, password);
        return res.json(user);
    }

    static async createUser(req: Request, res: Response): Promise<Response> {
        const message = await userService.createUser(req.body);
        return res.json({ message });
    }

    static async updateUser(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.body.id);
        const message = await userService.updateUser(id, req.body);
        return res.json({ message });
    }
}

export default UserController;