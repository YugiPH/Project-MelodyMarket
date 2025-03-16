import { AppDataSource } from "@database/data-source";
import { Permission } from "@entity/permission";
import { Repository } from "typeorm";

export class PermissionService {
    private permissionRepository: Repository<Permission>;

    constructor() {
        this.permissionRepository = AppDataSource.getRepository(Permission);
    }

    async getPermissions(page: number, limit: number, search?: string) {
        const query = this.permissionRepository.createQueryBuilder("permission");

        if (search) {
            query.where("permission.permission LIKE :search OR permission.id LIKE :search", {
                search: `%${search}%`
            });
        }

        const [permissions, total] = await query.skip((page - 1) * limit).take(limit).getManyAndCount();

        return { permissions, totalPage: Math.ceil(total / limit) };
    }

    async getAllPermissions(): Promise<Permission[]> {
        return this.permissionRepository.find();
    }

    async createPermission(name: string): Promise<string> {
        const existingPermission = await this.permissionRepository.findOne({ where: { permission: name } });

        if (existingPermission) {
            return "Quyền đã tồn tại";
        }

        const newPermission = this.permissionRepository.create({ permission: name });
        await this.permissionRepository.save(newPermission);
        return "Bạn đã thêm thành công";
    }

    async deletePermission(id: number): Promise<string> {
        const result = await this.permissionRepository.delete(id);
        return result.affected ? "Xóa thành công" : "Không tìm thấy quyền";
    }

    async getPermissionById(id: number): Promise<Permission | null> {
        return this.permissionRepository.findOne({ where: { id } });
    }

    async updatePermission(id: number, name: string): Promise<string> {
        const existingPermission = await this.permissionRepository.findOne({ where: { id } });

        if (!existingPermission) {
            return "Không tìm thấy quyền";
        }

        const duplicatePermission = await this.permissionRepository.findOne({ where: { permission: name } });

        if (duplicatePermission && duplicatePermission.id !== id) {
            return "Quyền đã tồn tại";
        }

        existingPermission.permission = name;
        await this.permissionRepository.save(existingPermission);
        return "Bạn đã cập nhật thành công";
    }
}
