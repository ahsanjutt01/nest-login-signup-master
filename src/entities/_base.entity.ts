import { Column, Index, PrimaryGeneratedColumn } from "typeorm";
import { UserStatus } from "./enums/user";

export default class BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Index()
  @Column({
    name: "updated_at",
    nullable: false,
    type: "datetime",
    default: () => "NOW()",
  })
  updated_at: Date;

  @Index()
  @Column({
    name: "created_at",
    nullable: false,
    type: "datetime",
    default: () => "NOW()",
  })
  created_at: Date;

  @Column({
    name: "status",
    nullable: false,
    type: "enum",
    enum: UserStatus,
    default: UserStatus.ACTIVE,
  })
  status: UserStatus;

  // @Column({
  //   name: "isActive",
  //   nullable: true,
  //   type: "bool",
  //   width: 1,
  //   default: true,
  // })
  // isActive: boolean;

  // @Column({
  //   name: "isDeleted",
  //   nullable: true,
  //   type: "bool",
  //   width: 1,
  //   default: false,
  // })
  // isDeleted: boolean;

  // @Column({
  //   name: "isPurged",
  //   nullable: true,
  //   type: "bool",
  //   width: 1,
  //   default: false,
  // })
  // isPurged: boolean;
}
