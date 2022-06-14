import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import User from '../_auth/user';
import BaseEntity from '../_base.entity';
import Brand from './brand';
import Category from './category';
import Variant from './variant';

@Entity({
  name: 'products',
})
export default class Product extends BaseEntity {
  // @PrimaryGeneratedColumn('uuid')
  // id: number;

  @Column({
    name: 'name',
    nullable: false,
    type: 'varchar',
    length: 100,
  })
  name: string;

  @Column({
    name: 'sku',
    nullable: false,
    type: 'varchar',
    length: 50,
    unique: true,
  })
  sku: string;

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
    name: 'userId',
    nullable: false,
  })
  @Generated('uuid')
  userId: string;

  //  user realtionship
  @ManyToOne(() => User, (user) => user.products)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  @JoinTable({ name: 'users' })
  user: User;

  // vairants

  @OneToMany(() => Variant, (variant) => variant.product, {
    cascade: true,
  })
  @JoinTable({ name: 'variants' })
  variants: Variant[];

  @Column({
    name: 'brandId',
    nullable: false,
  })
  @Generated('uuid')
  brandId: string;

  //  Brand realtionship
  @ManyToOne(() => Brand, (brand) => brand.products)
  @JoinColumn({ name: 'brandId', referencedColumnName: 'id' })
  @JoinTable({ name: 'brands' })
  brand: Brand;

  @Column({
    name: 'categoryId',
    nullable: false,
  })
  @Generated('uuid')
  categoryId: string;

  //  category realtionship
  @ManyToOne(() => Category, (category) => category.products)
  @JoinColumn({ name: 'categoryId', referencedColumnName: 'id' })
  @JoinTable({ name: 'categories' })
  category: Category;
}
