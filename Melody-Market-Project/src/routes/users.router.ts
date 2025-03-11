import express, { Request, Response, Router } from "express";
import UserController from "@controllers/users.controller";

const router: Router = express.Router();

router.get('/users', (req: Request, res: Response) => {
    UserController.getAllUsers(req, res);
});

router.get('/users/:id', (req: Request, res: Response) => {
    UserController.getUserById(req, res);
});

router.get("/users/detail",(req: Request, res: Response)=>{
    UserController.getUserByUsernameOrEmail(req, res);
});


router.post("/users/create",(req: Request, res: Response) => {
    UserController.createUser(req, res)
});
router.put("/users/update", (req: Request, res: Response) => {
    UserController.updateUser(req, res)
});


export default router;
