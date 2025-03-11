import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Order } from "./orders";
import { Products } from "./products";

@Entity()
export class Detail_Order {
    @PrimaryGeneratedColumn()
    id?: number;

    @ManyToOne(() => Order, { nullable: false })
    id_order?: Order;

    @ManyToOne(() => Products, { nullable: false })
    id_product?: Products;

    @Column()
    name_product?: string;

    @Column()
    price_product?: number;

    @Column()
    count?: number;

    @Column()
    size?: string;
}
