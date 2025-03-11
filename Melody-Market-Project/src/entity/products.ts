import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Category } from "./categories";
import { Sale } from "./sale";
import { Favorite } from "./favorite";
import { Detail_Order } from "./order_details";
import { Comment } from "./comment";
import { Carts } from "./carts";

@Entity()
export class Products {
    @PrimaryGeneratedColumn()
    id?: number;

    @ManyToOne(() => Category, { nullable: false })
    id_category?: Category;

    @Column()
    name_product?: string;

    @Column("decimal", { precision: 10, scale: 2 })
    price_product?: number;

    @Column()
    image?: string;

    @Column("text")
    describe?: string;

    @OneToMany(() => Sale, (sale) => sale.id_product)
    sales?: Sale[];

    @OneToMany(() => Favorite, (favorite) => favorite.id_product)
    favorites?: Favorite[];

    @OneToMany(() => Detail_Order, (detail) => detail.id_product)
    orderDetails?: Detail_Order[];

    @OneToMany(() => Comment, (comment) => comment.id_product)
    comments?: Comment[];

    @OneToMany(() => Carts, (cart) => cart.id_product)
    carts?: Carts[];
}
