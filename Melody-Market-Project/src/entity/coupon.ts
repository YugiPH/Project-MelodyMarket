import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Order } from "./orders";

@Entity()
export class Coupon {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    code?: string;

    @Column()
    count?: number;

    @Column()
    promotion?: string;

    @Column("text")
    describe?: string;

    @OneToMany(() => Order, (order) => order.id_coupon)
    orders?: Order[];
}
