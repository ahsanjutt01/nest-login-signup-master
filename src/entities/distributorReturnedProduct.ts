import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
// TODO: relationship
@Entity({
  name: 'distributor_returned_products',
})
export default class DistributorReturnedProduct {
  @Index()
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column({
    name: 'pref_id',
    nullable: true,
  })
  pref_id: number;

  @Column({
    name: 'tp',
    nullable: true,
  })
  tp: number;

  @Column({
    name: 'qty',
    nullable: true,
  })
  qty: number;

  @Column({
    name: 'unit_price',
    nullable: true,
  })
  unit_price: number;

  @Column({
    name: 'discount_pkr',
    nullable: true,
  })
  discount_pkr: number;

  @Column({
    name: 'value',
    nullable: true,
  })
  value: number;

  @Column({
    name: 'salesman_id',
    nullable: true,
  })
  salesman_id: number;

  @Column({
    name: 'distributor_id',
    nullable: true,
  })
  distributor_id: number;

  @Column({
    name: 'retailer_id',
    nullable: true,
  })
  retailer_id: number;

  @Column({
    name: 'child_retailers',
    nullable: true,
    type: 'text',
  })
  child_retailers: string;

  @Column({
    name: 'is_spot_sale',
    nullable: true,
  })
  is_spot_sale: number;

  @Column({
    name: 'merchant_discount',
    nullable: true,
  })
  merchant_discount: number;

  @Column({
    name: 'processed_date',
    nullable: true,
    type: 'datetime',
    default: () => 'NOW()',
  })
  processed_date: Date;

  @Column({
    name: 'item_type',
    nullable: true,
    type: 'tinyint',
  })
  item_type: number;

  @Column({
    name: 'created_at',
    nullable: true,
    type: 'datetime',
    default: () => 'NOW()',
  })
  created_at: Date;
}
