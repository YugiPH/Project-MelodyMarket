import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Users } from "./users";
import { Payment } from "./payments";
import { Note } from "./note";
import { Detail_Order } from "./order_details";
import { Coupon } from "./coupon";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id?: number;

    @ManyToOne(() => Users, { nullable: false })
    id_user?: Users;

    @ManyToOne(() => Payment, { nullable: false })
    id_payment?: Payment;

    @ManyToOne(() => Note, { nullable: true })
    id_note?: Note;

    @Column()
    address?: string;

    @Column()
    total?: number;

    @Column()
    status?: string;

    @Column()
    pay?: boolean;

    @Column()
    freeship?: number;

    @ManyToOne(() => Coupon, (coupon) => coupon.orders, { nullable: true })
    id_coupon?: Coupon;

    @Column("datetime")
    create_time?: Date;

    @OneToMany(() => Detail_Order, (detail) => detail.id_order)
    orderDetails?: Detail_Order[];
}
