import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToMany,
} from "typeorm";
import Business from "../business.entity";
import {
  EmailVarification,
  LisceneType,
  SignupMedium,
  UserType,
} from "../enums/user";
import BaseEntity from "../_base.entity";
// TOq: relationship
@Entity({
  name: "users",
})
export default class User extends BaseEntity {
  // @PrimaryGeneratedColumn('uuid')
  // id: string;

  @Column({
    name: "first_name",
    nullable: false,
    type: "varchar",
    length: 100,
  })
  first_name: string;
  @Column({
    name: "last_name",
    nullable: false,
    type: "varchar",
    length: 100,
  })
  last_name: string;

  @Index()
  @Column({
    name: "email",
    nullable: false,
    type: "varchar",
    length: 100,
  })
  email: string;

  @Column({
    name: "password",
    nullable: false,
    type: "varchar",
    length: 100,
  })
  password: string;

  @Column({
    name: "phone",
    nullable: false,
    type: "varchar",
    length: 15,
  })
  phone: string;

  @Column({
    name: "signup_medium",
    nullable: false,
    type: "enum",
    enum: SignupMedium,
    default: SignupMedium.EMAIL,
  })
  signup_medium: SignupMedium;

  @Column({
    name: "liscene_type",
    nullable: false,
    type: "enum",
    enum: LisceneType,
    default: LisceneType.FREE,
  })
  liscene_type: LisceneType;

  @Column({
    name: "agree",
    nullable: true,
    type: "bool",
    width: 1,
  })
  agree: boolean;

  @Index()
  @Column({
    name: "dob",
    nullable: false,
    type: "datetime",
    default: () => "NOW()",
  })
  dob: Date;

  @Column({
    name: "email_verfication",
    nullable: true,
    type: "enum",
    enum: EmailVarification,
    default: EmailVarification.PENDING,
  })
  email_verfication: boolean;
  @Column({
    name: "userType",
    nullable: false,
    type: "enum",
    enum: UserType,
    default: UserType.CLIENT,
  })
  userType: UserType;

  // Prodcuts
  @OneToMany(() => Business, (product) => product.user, {
    cascade: true,
  })
  @JoinTable({ name: "products" })
  businesses: Business[];

  // user type relationship
  // @ManyToOne(() => UserType, (userType) => userType.users)
  // @JoinColumn({ name: "userTypeId", referencedColumnName: "id" })
  // @JoinTable({ name: "user_types" })
  // userType: UserType;

  // Prodcuts
  // @OneToMany(() => Product, (product) => product.user, {
  //   cascade: true,
  // })
  // @JoinTable({ name: "products" })
  // products: Product[];

  // packs
  // @OneToMany(() => Pack, (pack) => pack.user, {
  //   cascade: true,
  // })
  // @JoinTable({ name: "packs" })
  // packs: Pack[];

  // size
  // @OneToMany(() => Size, (size) => size.user, {
  //   cascade: true,
  // })
  // @JoinTable({ name: "sizes" })
  // sizes: Size[];

  // size
  // @OneToMany(() => Brand, (brand) => brand.user, {
  //   cascade: true,
  // })
  // @JoinTable({ name: "sizes" })
  // brands: Brand[];
}
