import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Products } from "./products";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    category?: string;

    @OneToMany(() => Products, (product) => product.id_category)
    products?: Products[];
}
