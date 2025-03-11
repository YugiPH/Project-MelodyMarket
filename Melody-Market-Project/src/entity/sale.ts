import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Products } from "./products";

@Entity()
export class Sale {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    promotion?: number;

    @Column("text")
    describe?: string;

    @Column()
    status?: boolean;

    @Column("datetime")
    start?: Date;

    @Column("datetime")
    end?: Date;

    @ManyToOne(() => Products, (product) => product.sales, { nullable: false })
    id_product?: Products;
}
