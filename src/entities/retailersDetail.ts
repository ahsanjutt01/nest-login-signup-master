import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import BaseEntity from './_base.entity';
// TODO: relationship
@Entity({
  name: 'retailers_details',
})
export default class RetailersDetail extends BaseEntity {
  @Index()
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'shop_code',
    nullable: true,
  })
  shop_code: string;

  @Column({
    name: 'retailer_name',
    nullable: true,
  })
  retailer_name: string;
  @Column({
    name: 'retailer_phone',
    nullable: true,
  })
  retailer_phone: string;
  @Column({
    name: 'distributor_username',
    nullable: true,
  })
  distributor_username: string;
  @Column({
    name: 'distributor_password',
    nullable: true,
  })
  distributor_password: string;
  @Column({
    name: 'retailer_email',
    nullable: true,
  })
  retailer_email: string;
  @Column({
    name: 'retailer_address',
    nullable: true,
  })
  retailer_address: string;
  @Column({
    name: 'retailer_lats',
    nullable: true,
  })
  retailer_lats: number;
  @Column({
    name: 'retailer_longs',
    nullable: true,
  })
  retailer_longs: number;
  @Column({
    name: 'retailer_city',
    nullable: true,
  })
  retailer_city: number;
  @Column({
    name: 'retailer_type_id',
    nullable: true,
  })
  retailer_type_id: number;
  @Column({
    name: 'merchant_type',
    nullable: true,
  })
  merchant_type: string;

  @Column({
    name: 'retailer_territory_id',
    nullable: true,
  })
  retailer_territory_id: number;

  @Column({
    name: 'retailer_image',
    nullable: true,
    type: 'text',
  })
  retailer_image: string;

  @Column({
    name: 'retailer_owner',
    nullable: true,
  })
  retailer_owner: string;

  @Column({
    name: 'ntn',
    nullable: true,
  })
  ntn: string;

  @Column({
    name: 'strn',
    nullable: true,
  })
  strn: string;

  @Column({
    name: 'cnic',
    nullable: true,
  })
  cnic: string;

  @Column({
    name: 'zone_id',
    nullable: true,
  })
  zone_id: number;

  @Column({
    name: 'area_id',
    nullable: true,
  })
  area_id: number;

  @Column({
    name: 'locality_id',
    nullable: true,
  })
  locality_id: number;

  @Column({
    name: 'neighbourhood_id',
    nullable: true,
  })
  neighbourhood_id: number;

  @Column({
    name: 'segment_id',
    nullable: true,
  })
  segment_id: number;

  @Column({
    name: 'merged_child_retailers',
    nullable: true,
    type: 'text',
  })
  merged_child_retailers: string;

  @Column({
    name: 'opening_balance',
    nullable: true,
  })
  opening_balance: number;

  @Column({
    name: 'opening_balance_added_at',
    nullable: true,
    type: 'datetime',
    default: () => 'NOW()',
  })
  opening_balance_added_at: Date;

  @Column({
    name: 'unique_key',
    nullable: true,
  })
  unique_key: string;

  @Column({
    name: 'added_by',
    nullable: true,
  })
  added_by: number;

  @Column({
    name: 'updated_by',
    nullable: true,
  })
  updated_by: number;

  @Column({
    name: 'synced_at',
    nullable: true,
    type: 'datetime',
    default: () => 'NOW()',
  })
  synced_at: Date;
}
