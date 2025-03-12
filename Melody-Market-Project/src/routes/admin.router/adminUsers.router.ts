import express, { Request, Response, Router } from "express";
import AdminUserController from "@controllers/admin.controller/adminUsers.controller";

const router: Router = express.Router();

router.get("/admin/users", (req: Request, res: Response) => {
    AdminUserController.getUsers(req, res);
});

router.post("/admin/users/create", (req: Request, res: Response) => {
    AdminUserController.createUser(req, res);
});

router.delete("/admin/users/delete", (req: Request, res: Response) => {
    AdminUserController.deleteUser(req, res);
});

router.get("/admin/users/:id", (req: Request, res: Response) => {
    AdminUserController.getUserDetails(req, res);
});

router.put("/admin/users/update", (req: Request, res: Response) => {
    AdminUserController.updateUser(req, res);
});

router.post("/admin/login", (req: Request, res: Response) => {
    AdminUserController.login(req, res);
});

export default router;
