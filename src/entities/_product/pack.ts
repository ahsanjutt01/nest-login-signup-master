import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  JoinTable,
  OneToMany,
} from 'typeorm';
import User from '../_auth/user';
import BaseEntity from '../_base.entity';
import Variant from './variant';

@Entity({
  name: 'packs',
})
export default class Pack extends BaseEntity {
  //   @PrimaryGeneratedColumn()
  //   id: number;

  @Column({
    name: 'title',
    nullable: false,
    type: 'varchar',
    length: 100,
  })
  title: string;

  @Column({
    name: 'quantity',
    nullable: false,
    type: 'int',
  })
  quantity: number;

  @Column({
    name: 'userId',
    nullable: false,
  })
  @Generated('uuid')
  userId: string;

  //  user realtionship
  //   @ManyToOne(() => User, (user) => user.products)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  @JoinTable({ name: 'users' })
  user: User;

  // products
  @OneToMany(() => Variant, (variant) => variant.pack, {
    cascade: true,
  })
  @JoinTable({ name: 'variants' })
  variants: Variant[];
}
