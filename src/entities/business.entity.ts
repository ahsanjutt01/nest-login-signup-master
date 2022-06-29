import {
  Column,
  Entity,
  Generated,
  Index,
  JoinColumn,
  JoinTable,
  ManyToOne,
} from "typeorm";
import { CurrencyFormat, DateFormat, Taxable } from "./enums/business.enum";
import User from "./_auth/user";
import BaseEntity from "./_base.entity";

// TOq: relationship
@Entity({
  name: "businesses",
})
export default class Business extends BaseEntity {
  // @PrimaryGeneratedColumn('uuid')
  // id: string;

  @Column({
    name: "business_name",
    nullable: false,
    type: "varchar",
    length: 100,
  })
  business_name: string;
  @Column({
    name: "offical_email",
    nullable: false,
    type: "varchar",
    length: 100,
  })
  offical_email: string;

  @Index()
  @Column({
    name: "country_code",
    nullable: false,
    type: "varchar",
    length: 5,
  })
  country_code: string;

  @Column({
    name: "phone_number",
    nullable: false,
    type: "varchar",
    length: 15,
  })
  phone_number: string;

  @Column({
    name: "additional_information",
    nullable: false,
    type: "varchar",
    length: 15,
  })
  additional_information: string;

  @Column({
    name: "business_number_type",
    nullable: false,
    type: "varchar",
    length: 15,
  })
  business_number_type: string;
  @Column({
    name: "business_no",
    nullable: false,
    type: "varchar",
    length: 15,
  })
  business_no: string;

  @Column({
    name: "address_1",
    nullable: false,
    type: "varchar",
    length: 255,
  })
  address_1: string;

  @Column({
    name: "address_2",
    nullable: false,
    type: "varchar",
    length: 255,
  })
  address_2: string;

  @Column({
    name: "address_3",
    nullable: false,
    type: "varchar",
    length: 255,
  })
  address_3: string;

  @Column({
    name: "city",
    nullable: false,
    type: "varchar",
    length: 100,
  })
  city: string;

  @Column({
    name: "postal_code",
    nullable: false,
    type: "varchar",
    length: 15,
  })
  postal_code: string;

  @Column({
    name: "country",
    nullable: false,
    type: "varchar",
    length: 100,
  })
  country: string;

  @Column({
    name: "currency_type",
    nullable: false,
    type: "varchar",
    length: 15,
  })
  currency_type: string;

  @Column({
    name: "date_format",
    nullable: false,
    type: "enum",
    enum: DateFormat,
    default: DateFormat.YYYY_MM_DD,
  })
  date_format: DateFormat;

  @Column({
    name: "language",
    nullable: false,
    type: "varchar",
    length: 100,
  })
  language: string;

  @Column({
    name: "currency_format",
    nullable: false,
    type: "enum",
    enum: CurrencyFormat,
    default: CurrencyFormat.PKR,
  })
  currency_format: CurrencyFormat;

  @Column({
    name: "taxable",
    nullable: false,
    type: "enum",
    enum: Taxable,
    default: Taxable.NON_TAX,
  })
  taxable: Taxable;

  @Column({
    name: "first_tax_type_name",
    nullable: false,
    type: "varchar",
    length: 100,
  })
  first_tax_type_name: string;

  @Column({
    name: "first_tax_value",
    nullable: false,
    type: "int",
  })
  first_tax_value: number;

  @Column({
    name: "second_tax_type_name",
    nullable: false,
    type: "int",
  })
  second_tax_type_name: string;

  @Column({
    name: "second_tax_value",
    nullable: false,
    type: "int",
  })
  second_tax_value: number;

  @Column({
    name: "user_signature_pic_url",
    nullable: false,
    type: "varchar",
    length: 500,
  })
  user_signature_pic_url: string;

  @Column({
    name: "userId",
    nullable: false,
  })
  @Generated("uuid")
  userId: string;

  //  user realtionship
  @ManyToOne(() => User, (user) => user.businesses)
  @JoinColumn({ name: "userId", referencedColumnName: "id" })
  @JoinTable({ name: "users" })
  user: User;

  // @Column({
  //   name: "liscene_type",
  //   nullable: false,
  //   type: "enum",
  //   enum: LisceneType,
  //   default: LisceneType.FREE,
  // })
  // liscene_type: LisceneType;

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
