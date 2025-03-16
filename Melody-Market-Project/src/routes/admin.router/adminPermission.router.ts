import express, { Request, Response, Router } from "express";
import PermissionController from "@controllers/admin.controller/adminPermission.controller";

const router: Router = express.Router();

router.get("/permissions", (req: Request, res: Response) => {
    PermissionController.getPermissions(req, res);
});

router.get("/permissions/all", (req: Request, res: Response) => {
    PermissionController.getAllPermissions(req, res);
});

router.post("/permissions/create", (req: Request, res: Response) => {
    PermissionController.createPermission(req, res);
});

router.delete("/permissions/delete", (req: Request, res: Response) => {
    PermissionController.deletePermission(req, res);
});

router.get("/permissions/:id", (req: Request, res: Response) => {
    PermissionController.getPermissionById(req, res);
});

router.patch("/permissions/update", (req: Request, res: Response) => {
    PermissionController.updatePermission(req, res);
});

export default router;
