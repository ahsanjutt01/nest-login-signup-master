import {
  Column,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import BaseEntity from "../_base.entity";
import User from "./user";
// TODO: relationship
@Entity({
  name: "user_types",
})
export default class UserType extends BaseEntity {
  // @PrimaryGeneratedColumn('uuid')
  // id: string;

  @Column({
    name: "title",
    nullable: false,
    type: "varchar",
    length: 100,
  })
  title: string;

  // @OneToMany(() => User, (user) => user.userType, {
  //   cascade: true,
  // })
  // @JoinTable({ name: 'users' })
  // users: User[];
}
