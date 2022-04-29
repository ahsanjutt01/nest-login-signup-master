import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { OrderType } from './enums/orderType';

// TODO: relationship
@Entity({
  name: 'orders',
})
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'employee_id',
    nullable: true,
  })
  employee_id: number;

  @Column({
    name: 'catalogue_id',
    nullable: true,
  })
  catalogue_id: number;

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
  child_retailers: number;

  @Column({
    name: 'booker_lats',
    nullable: true,
  })
  booker_lats: number;

  @Column({
    name: 'booker_longs',
    nullable: true,
  })
  booker_longs: number;

  @Column({
    name: 'distance',
    nullable: true,
  })
  distance: number;

  @Column({
    name: 'status',
    nullable: true,
  })
  status: number;

  @Column({
    name: 'within_radius',
    nullable: true,
  })
  within_radius: number;

  @Column({
    name: 'status_code',
    nullable: true,
  })
  status_code: number;

  @Column({
    name: 'order_total',
    nullable: true,
  })
  order_total: number;

  @Column({
    name: 'ttl_qty_sold',
    nullable: true,
  })
  ttl_qty_sold: number;

  @Column({
    name: 'ttl_products_sold',
    nullable: true,
  })
  ttl_products_sold: number;

  @Column({
    name: 'approved',
    nullable: true,
  })
  approved: boolean;

  @Column({
    name: 'remarks',
    nullable: true,
  })
  remarks: string;

  @Column({
    name: 'phone_order',
    nullable: true,
  })
  phone_order: boolean;

  @Column({
    name: 'offline_order',
    nullable: true,
  })
  offline_order: boolean;

  @Column({
    name: 'out_of_plan',
    nullable: true,
  })
  out_of_plan: boolean;

  @Column({
    name: 'approved_by',
    nullable: true,
  })
  approved_by: number;

  @Column({
    name: 'approved_at',
    nullable: true,
    type: 'datetime',
    default: () => 'NOW()',
  })
  approved_at: Date;

  @Column({
    name: 'created_at',
    nullable: true,
    type: 'datetime',
    default: () => 'NOW()',
  })
  created_at: Date;

  @Column({
    name: 'synced_at',
    nullable: true,
    type: 'datetime',
    default: () => 'NOW()',
  })
  synced_at: Date;

  @Column({
    name: 'updated_at',
    nullable: true,
    type: 'datetime',
    default: () => 'NOW()',
  })
  updated_at: Date;

  @Column({
    name: 'updated_by',
    nullable: true,
  })
  updated_by: number;

  @Column({
    name: 'updated_by_dist',
    nullable: true,
  })
  updated_by_dist: number;

  @Column({
    name: 'completed_by',
    nullable: true,
  })
  completed_by: number;

  @Column({
    name: 'processed_at',
    nullable: true,
    type: 'datetime',
    default: () => 'NOW()',
  })
  processed_at: Date;

  @Column({
    name: 'processed_by',
    nullable: true,
  })
  processed_by: number;

  @Column({
    name: 'dispatched_by',
    nullable: true,
  })
  dispatched_by: number;

  @Column({
    name: 'dispatched_at',
    nullable: true,
    type: 'datetime',
    default: () => 'NOW()',
  })
  dispatched_at: Date;

  @Column({
    name: 'completed_by_dist',
    nullable: true,
  })
  completed_by_dist: number;

  @Column({
    name: 'cancelled_by_dist',
    nullable: true,
  })
  cancelled_by_dist: number;

  @Column({
    name: 'completed_at',
    nullable: true,
    type: 'datetime',
    default: () => 'NOW()',
  })
  completed_at: number;

  @Column({
    name: 'cancelled_by',
    nullable: true,
  })
  cancelled_by: number;

  @Column({
    name: 'booking_region',
    nullable: true,
  })
  booking_region: string;

  @Column({
    name: 'booking_area',
    nullable: true,
  })
  booking_area: string;

  @Column({
    name: 'booking_territory',
    nullable: true,
  })
  booking_territory: string;

  @Column({
    name: 'invoice_number',
    nullable: true,
  })
  invoice_number: string;

  @Column({
    name: 'freight_charges',
    nullable: true,
  })
  freight_charges: number;

  @Column({
    name: 'booking_zone',
    nullable: true,
  })
  booking_zone: number;

  @Column({
    name: 'booking_locality_id',
    nullable: true,
  })
  booking_locality_id: number;

  @Column({
    name: 'booking_neighbourhood_id',
    nullable: true,
  })
  booking_neighbourhood_id: number;

  @Column({
    name: 'sales_man_id',
    nullable: true,
  })
  sales_man_id: number;

  @Column({
    name: 'assignment_id',
    nullable: true,
  })
  assignment_id: string;

  @Column({
    name: 'load_id',
    nullable: true,
  })
  load_id: number;

  @Column({
    name: 'order_unique_key',
    nullable: true,
    unique: true,
  })
  order_unique_key: string;

  @Column({
    name: 'order_type',
    nullable: true,
    type: 'enum',
    enum: OrderType,
  })
  order_type: OrderType;

  @Column({
    name: 'spot_sale',
    nullable: true,
  })
  spot_sale: number;

  @Column({
    name: 'counter_sale',
    nullable: true,
  })
  counter_sale: number;

  @Column({
    name: 'invoice_date',
    nullable: true,
    type: 'datetime',
    default: () => 'NOW()',
  })
  invoice_date: number;

  @Column({
    name: 'distributor_id',
    nullable: true,
  })
  distributor_id: number;

  @Column({
    name: 'region_id',
    nullable: true,
  })
  region_id: number;

  @Column({
    name: 'area_id',
    nullable: true,
  })
  area_id: number;

  @Column({
    name: 'assigned_route_id',
    nullable: true,
  })
  assigned_route_id: number;

  @Column({
    name: 'territory_id',
    nullable: true,
  })
  territory_id: number;

  @Column({
    name: 'booked_order_value',
    nullable: true,
  })
  booked_order_value: number;

  @Column({
    name: 'booked_total_qty',
    nullable: true,
  })
  booked_total_qty: number;

  @Column({
    name: 'booked_total_skus',
    nullable: true,
  })
  booked_total_skus: number;

  @Column({
    name: 'gross_sale_amount',
    nullable: true,
  })
  gross_sale_amount: number;

  @Column({
    name: 'total_retail_price',
    nullable: true,
  })
  total_retail_price: number;

  @Column({
    name: 'total_tax_amount',
    nullable: true,
  })
  total_tax_amount: number;

  @Column({
    name: 'total_amount_after_tax',
    nullable: true,
  })
  total_amount_after_tax: number;

  @Column({
    name: 'total_discount',
    nullable: true,
  })
  total_discount: number;
}
