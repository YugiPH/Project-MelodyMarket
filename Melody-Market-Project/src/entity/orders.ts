import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Users } from "./users";
import { Payment } from "./payments";
import { Note } from "./note";
import { Detail_Order } from "./order_details";

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

    @Column()
    id_coupon?: string;

    @Column("datetime")
    create_time?: Date;

    @OneToMany(() => Detail_Order, (detail) => detail.id_order)
    orderDetails?: Detail_Order[];
}
