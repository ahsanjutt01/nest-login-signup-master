import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import BaseEntity from './_base.entity';
// TODO: relationship
@Entity({
  name: 'sub_categories',
})
export default class SubCategory extends BaseEntity {
  @PrimaryGeneratedColumn()
  sub_category_id: number;

  @Column({
    name: 'sub_category_name',
    nullable: true,
    type: 'varchar',
  })
  sub_category_name: string;
  @Column({
    name: 'main_category_id',
    nullable: true,
    type: 'int',
  })
  main_category_id: number;
  @Column({
    name: 'is_active',
    nullable: true,
    type: 'tinyint',
  })
  is_active: number;
}
