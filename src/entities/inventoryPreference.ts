import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import BaseEntity from './_base.entity';
// TODO: relationship
@Entity({
  name: 'inventory_preferences',
})
export default class InventoryPreference extends BaseEntity {
  @Index()
  @PrimaryGeneratedColumn()
  pref_id: number;

  @Index()
  @Column({
    name: 'item_id',
    nullable: true,
  })
  item_id: number;

  @Column({
    name: 'unit_id',
    nullable: true,
  })
  unit_id: number;

  @Column({
    name: 'item_barcode',
    nullable: true,
  })
  item_barcode: string;

  @Column({
    name: 'item_quantity',
    nullable: true,
  })
  item_quantity: number;

  @Column({
    name: 'item_warehouse_price',
    nullable: true,
  })
  item_warehouse_price: number;

  @Column({
    name: 'item_trade_price',
    nullable: true,
  })
  item_trade_price: number;

  @Column({
    name: 'item_retail_price',
    nullable: true,
  })
  item_retail_price: number;

  @Column({
    name: 'sub_category_id',
    nullable: true,
  })
  sub_category_id: number;

  @Column({
    name: 'item_thumbnail',
    nullable: true,
    type: 'text',
  })
  item_thumbnail: string;

  @Column({
    name: 'item_image',
    nullable: true,
    type: 'text',
  })
  item_image: string;

  @Column({
    name: 'item_description',
    nullable: true,
    type: 'text',
  })
  item_description: string;

  @Column({
    name: 'item_status',
    nullable: true,
  })
  item_status: number;

  @Column({
    name: 'qty_in_primary_parent',
    nullable: true,
  })
  qty_in_primary_parent: number;

  @Column({
    name: 'sequence',
    nullable: true,
    type: 'tinyint',
  })
  sequence: number;

  @Column({
    name: 'updated_by',
    nullable: true,
  })
  updated_by: number;
}
