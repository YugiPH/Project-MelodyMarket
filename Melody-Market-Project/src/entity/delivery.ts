import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Delivery {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    id_delivery?: string;

    @Column()
    from?: string;

    @Column()
    to?: string;

    @Column()
    distance?: string;

    @Column()
    duration?: string;

    @Column()
    price?: string;
}
