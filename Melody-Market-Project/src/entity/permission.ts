import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Users } from "./users";

@Entity()
export class Permission {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    permission?: string;

    @OneToMany(() => Users, (user) => user.id_permission)
    users?: Users[];
}
