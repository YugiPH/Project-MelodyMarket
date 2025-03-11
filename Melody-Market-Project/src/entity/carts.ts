import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Users } from "./users";
import { Products } from "./products";

@Entity()
export class Carts {
    @PrimaryGeneratedColumn()
    id?: number;

    @ManyToOne(() => Users, { nullable: false })
    id_user?: Users;

    @ManyToOne(() => Products, { nullable: false })
    id_product?: Products;

    @Column()
    count?: number;

    @Column()
    size?: string;
}
