import { AppDataSource } from "@database/data-source";
import { Users } from "@entity/users";
import { Repository } from "typeorm";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export class AdminUserService {
    private userRepository: Repository<Users>;

    constructor() {
        this.userRepository = AppDataSource.getRepository(Users);
    }

    async getUsers(page: number, limit: number, search?: string, permission?: number) {
        const query = this.userRepository.createQueryBuilder("user").leftJoinAndSelect("user.id_permission", "permission");

        if (permission) {
            query.where("user.id_permission = :permission", { permission });
        }

        if (search) {
            query.andWhere("(user.fullname LIKE :search OR user.id LIKE :search)", { search: `%${search}%` });
        }

        const [users, total] = await query.skip((page - 1) * limit).take(limit).getManyAndCount();

        return { users, totalPage: Math.ceil(total / limit) };
    }

    async createUser(fullname: string, username: string, password: string, email: string, permission: number): Promise<string> {
        const existingUser = await this.userRepository.findOne({ where: [{ email }, { username }] });

        if (existingUser) {
            return "Email hoặc username đã tồn tại";
        }

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = this.userRepository.create({
            fullname,
            username,
            password: hashedPassword,
            email,
            id_permission: { id: permission }
        });

        await this.userRepository.save(newUser);
        return "Bạn đã thêm thành công";
    }

    async deleteUser(id: number): Promise<string> {
        const result = await this.userRepository.delete(id);
        return result.affected ? "Xóa thành công" : "Không tìm thấy user";
    }

    async getUserDetails(id: number): Promise<Users | null> {
        return this.userRepository.findOne({ where: { id } });
    }

    async updateUser(id: number, fullname?: string, password?: string, permission?: number): Promise<string> {
        const user = await this.userRepository.findOne({ where: { id } });

        if (!user) {
            return "Không tìm thấy user";
        }

        if (password) {
            const salt = await bcrypt.genSalt();
            user.password = await bcrypt.hash(password, salt);
        }

        if (fullname) {
            user.fullname = fullname;
        }

        if (permission) {
            user.id_permission = { id: permission };
        }

        await this.userRepository.save(user);
        return "Cập nhật thành công";
    }

    async login(email: string, password: string) {
        const user = await this.userRepository.findOne({
            where: [{ username: email }, { email }],
            relations: ["id_permission"]
        });
    
        if (!user || !user.password) {  // Kiểm tra nếu `user` không tồn tại hoặc chưa có mật khẩu
            return { msg: "Không tìm thấy user hoặc user chưa có mật khẩu" };
        }
    
        const auth = await bcrypt.compare(password, user.password);
        if (!auth) {
            return { msg: "Sai mật khẩu" };
        }
    
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || "defaultSecretKey", { expiresIn: "1h" });
    
        return { msg: "Đăng nhập thành công", user, jwt: token };
    }
    
}
