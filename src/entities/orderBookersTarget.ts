import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import BaseEntity from './_base.entity';
// TODO: relationship
@Entity({
  name: 'order_bookers_targets',
})
export default class OrderBookersTarget extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'pref_id',
    nullable: true,
    type: 'int',
  })
  pref_id: number;
  @Column({
    name: 'unit_id',
    nullable: true,
    type: 'int',
  })
  unit_id: number;
  @Column({
    name: 'brand_id',
    nullable: true,
    type: 'int',
  })
  brand_id: number;
  @Column({
    name: 'division_id',
    nullable: true,
    type: 'int',
  })
  division_id: number;
  @Column({
    name: 'item_id',
    nullable: true,
    type: 'int',
  })
  item_id: number;
  @Column({
    name: 'employee_id',
    nullable: true,
    type: 'int',
  })
  employee_id: number;
  @Column({
    name: 'trade_price',
    nullable: true,
    type: 'int',
  })
  trade_price: number;
  @Column({
    name: 'target',
    nullable: true,
    type: 'int',
  })
  target: number;
  @Column({
    name: 'target_value',
    nullable: true,
    type: 'int',
  })
  target_value: number;
  @Column({
    name: 'target_month',
    nullable: true,
    type: 'datetime',
    default: () => 'NOW()',
  })
  target_month: Date;
  @Column({
    name: 'parent_unit_id',
    nullable: true,
    type: 'int',
  })
  parent_unit_id: number;
  @Column({
    name: 'created_by',
    nullable: true,
    type: 'int',
  })
  created_by: number;
  @Column({
    name: 'updated_by',
    nullable: true,
    type: 'int',
  })
  updated_by: number;
}
