import { AppDataSource } from "@database/data-source";
import { Users } from "@entity/users";
import { Repository } from "typeorm";

export class UserService {
    private userRepository: Repository<Users>;

    constructor() {
        this.userRepository = AppDataSource.getRepository(Users);
    }

    async getAllUsers(): Promise<Users[]> {
        return this.userRepository.find();
    }

    async getUserById(id: number): Promise<Users | null> {
        return this.userRepository.findOne({ where: { id } });
    }

    async getUserByUsernameOrEmail(username: string, password: string): Promise<Users | string> {
        const user = await this.userRepository.findOne({
            where: [{ username }, { email: username }]
        });

        if (!user) {
            return "Không tìm thấy user";
        }
        
        if (user.password !== password) {
            return "Sai mật khẩu";
        }

        return user;
    }

    async createUser(data: Partial<Users>): Promise<string> {
        const existingUser = await this.userRepository.findOne({ where: { username: data.username } });

        if (existingUser) {
            return "User đã tồn tại";
        }

        const newUser = this.userRepository.create(data);
        await this.userRepository.save(newUser);
        return "Thành công";
    }

    async updateUser(id: number, data: Partial<Users>): Promise<string> {
        const user = await this.userRepository.findOne({ where: { id } });

        if (!user) {
            return "Không tìm thấy user";
        }

        user.fullname = data.fullname ?? user.fullname;
        user.username = data.username ?? user.username;
        user.password = data.password ?? user.password;

        await this.userRepository.save(user);
        return "Cập nhật thành công";
    }
}
