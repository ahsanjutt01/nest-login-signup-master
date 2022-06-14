import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import BaseEntity from '../_base.entity';
import Brand from '../_product/brand';
import Pack from '../_product/pack';
import Product from '../_product/product';
import Size from '../_product/size';
import UserType from './userType';
// TODO: relationship
@Entity({
  name: 'users',
})
export default class User extends BaseEntity {
  // @PrimaryGeneratedColumn('uuid')
  // id: string;

  @Column({
    name: 'fullName',
    nullable: false,
    type: 'varchar',
    length: 100,
  })
  fullName: string;

  @Column({
    name: 'email',
    nullable: false,
    type: 'varchar',
    length: 100,
  })
  email: string;

  @Column({
    name: 'password',
    nullable: false,
    type: 'varchar',
    length: 100,
  })
  password: string;

  @Column({
    name: 'phone',
    nullable: false,
    type: 'varchar',
    length: 15,
  })
  phone: string;

  @Column({
    name: 'address',
    nullable: false,
    type: 'varchar',
    length: 255,
  })
  address: string;

  @Column({
    name: 'agree',
    nullable: true,
    type: 'bool',
    width: 1,
  })
  agree: boolean;

  @Column({
    name: 'isApproved',
    nullable: true,
    type: 'bool',
    width: 1,
  })
  isApproved: boolean;

  @Column({
    name: 'userTypeId',
    nullable: false,
  })
  userTypeId: number;

  // user type relationship
  @ManyToOne(() => UserType, (userType) => userType.users)
  @JoinColumn({ name: 'userTypeId', referencedColumnName: 'id' })
  @JoinTable({ name: 'user_types' })
  userType: UserType;

  // Prodcuts
  @OneToMany(() => Product, (product) => product.user, {
    cascade: true,
  })
  @JoinTable({ name: 'products' })
  products: Product[];

  // packs
  @OneToMany(() => Pack, (pack) => pack.user, {
    cascade: true,
  })
  @JoinTable({ name: 'packs' })
  packs: Pack[];

  // size
  @OneToMany(() => Size, (size) => size.user, {
    cascade: true,
  })
  @JoinTable({ name: 'sizes' })
  sizes: Size[];

  // size
  @OneToMany(() => Brand, (brand) => brand.user, {
    cascade: true,
  })
  @JoinTable({ name: 'sizes' })
  brands: Brand[];
}
