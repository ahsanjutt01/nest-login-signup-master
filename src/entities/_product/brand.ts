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
import Product from './product';

@Entity({
  name: 'brands',
})
export default class Brand extends BaseEntity {
  // @PrimaryGeneratedColumn()
  // id: number;

  @Column({
    name: 'title',
    nullable: false,
    type: 'varchar',
    length: 100,
  })
  title: string;

  @Column({
    name: 'email',
    nullable: false,
    type: 'varchar',
    length: 100,
  })
  email: string;

  @Column({
    name: 'city',
    nullable: false,
    type: 'varchar',
    length: 100,
  })
  city: string;

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

  @OneToMany(() => Product, (prod) => prod.brand, {
    cascade: true,
  })
  @JoinTable({ name: 'brands' })
  products: Product[];

  @Column({
    name: 'userId',
    nullable: false,
  })
  @Generated('uuid')
  userId: string;

  //  user realtionship
  @ManyToOne(() => User, (user) => user.brands)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  @JoinTable({ name: 'users' })
  user: User;
}
