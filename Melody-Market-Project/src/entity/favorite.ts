import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Users } from "./users";
import { Products } from "./products";

@Entity()
export class Favorite {
    @PrimaryGeneratedColumn()
    id?: number;

    @ManyToOne(() => Users, { nullable: false })
    id_user?: Users;

    @ManyToOne(() => Products, { nullable: false })
    id_product?: Products;
}
