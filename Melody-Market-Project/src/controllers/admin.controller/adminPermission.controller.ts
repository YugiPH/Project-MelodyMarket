import { Request, Response } from "express";
import { PermissionService } from "@services/admin.service/adminPermission.service";

const permissionService = new PermissionService();

export default class PermissionController {
    static async getPermissions(req: Request, res: Response): Promise<Response> {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 8;
        const search = req.query.search as string | undefined;

        const result = await permissionService.getPermissions(page, limit, search);
        return res.json(result);
    }

    static async getAllPermissions(req: Request, res: Response): Promise<Response> {
        const permissions = await permissionService.getAllPermissions();
        return res.json(permissions);
    }

    static async createPermission(req: Request, res: Response): Promise<Response> {
        const name = req.body.name.toLowerCase().replace(/^.|\s\S/g, (a: string) => a.toUpperCase());


        const message = await permissionService.createPermission(name);
        return res.json({ msg: message });
    }

    static async deletePermission(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.query.id as string);
        const message = await permissionService.deletePermission(id);
        return res.json({ msg: message });
    }

    static async getPermissionById(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.params.id);
        const permission = await permissionService.getPermissionById(id);
        return permission ? res.json(permission) : res.status(404).json({ msg: "Không tìm thấy quyền" });
    }

    static async updatePermission(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.body.id);
        const name = req.body.name.toLowerCase().replace(/^.|\s\S/g, (a: string) => a.toUpperCase());

        const message = await permissionService.updatePermission(id, name);
        return res.json({ msg: message });
    }
}
