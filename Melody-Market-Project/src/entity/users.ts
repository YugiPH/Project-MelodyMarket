import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Permission } from "./permission";
import { Order } from "./orders";
import { Favorite } from "./favorite";
import { Comment } from "./comment";
import { Carts } from "./carts";

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(() => Permission, { nullable: false })
  id_permission?: Permission;

  @Column()
  username?: string;

  @Column()
  password?: string;

  @Column()
  fullname?: string;

  @Column()
  gender?: string;

  @Column()
  email?: string;

  @Column()
  phone?: string;

  @OneToMany(() => Order, (order) => order.id_user)
  orders?: Order[];

  @OneToMany(() => Favorite, (favorite) => favorite.id_user)
  favorites?: Favorite[];

  @OneToMany(() => Comment, (comment) => comment.id_user)
  comments?: Comment[];

  @OneToMany(() => Carts, (cart) => cart.id_user)
  carts?: Carts[];
}
