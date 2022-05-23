import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import BaseEntity from './_base.entity';
// TODO: relationship
@Entity({
  name: 'pos_material_items',
})
export default class PosMaterialItem extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'product_id',
    nullable: true,
    type: 'int',
  })
  product_id: number;
  @Column({
    name: 'brand_id',
    nullable: true,
    type: 'int',
  })
  brand_id: number;
  @Column({
    name: 'category_id',
    nullable: true,
    type: 'int',
  })
  category_id: number;
  @Column({
    name: 'pos_id',
    nullable: true,
    type: 'int',
  })
  pos_id: number;
}
