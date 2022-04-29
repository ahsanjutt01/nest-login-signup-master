import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ItemStatus } from './enums/itemStatus';
// TODO: relationship
@Entity({
  name: 'order_contents',
})
export default class OrderContent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'order_id',
    nullable: true,
  })
  order_id: number;

  @Column({
    name: 'pref_id',
    nullable: true,
  })
  pref_id: number;

  @Column({
    name: 'item_quantity_booker',
    nullable: true,
  })
  item_quantity_booker: number;

  @Column({
    name: 'item_quantity_updated',
    nullable: true,
  })
  item_quantity_updated: number;

  @Column({
    name: 'quantity_returned',
    nullable: true,
  })
  quantity_returned: number;

  @Column({
    name: 'original_price',
    nullable: true,
  })
  original_price: number;

  @Column({
    name: 'scheme_discount',
    nullable: true,
  })
  scheme_discount: number;

  @Column({
    name: 'unit_price_after_scheme_discount',
    nullable: true,
  })
  unit_price_after_scheme_discount: number;

  @Column({
    name: 'merchant_discount',
    nullable: true,
  })
  merchant_discount: number;

  @Column({
    name: 'merchant_discount_pkr',
    nullable: true,
  })
  merchant_discount_pkr: number;
  @Column({
    name: 'unit_price_after_merchant_discount',
    nullable: true,
  })
  unit_price_after_merchant_discount: number;

  @Column({
    name: 'special_discount',
    nullable: true,
  })
  special_discount: number;
  @Column({
    name: 'unit_price_after_special_discount',
    nullable: true,
  })
  unit_price_after_special_discount: number;
  @Column({
    name: 'booker_discount',
    nullable: true,
  })
  booker_discount: number;
  @Column({
    name: 'unit_price_after_individual_discount',
    nullable: true,
  })
  unit_price_after_individual_discount: number;
  @Column({
    name: 'unit_id',
    nullable: true,
  })
  unit_id: number;
  @Column({
    name: 'brand_id',
    nullable: true,
  })
  brand_id: number;
  @Column({
    name: 'item_id',
    nullable: true,
  })
  item_id: number;
  @Column({
    name: 'scheme_id',
    nullable: true,
  })
  scheme_id: number;
  @Column({
    name: 'scheme_min_quantity',
    nullable: true,
  })
  scheme_min_quantity: number;
  @Column({
    name: 'scheme_quantity_free',
    nullable: true,
  })
  scheme_quantity_free: number;
  @Column({
    name: 'scheme_rule',
    nullable: true,
  })
  scheme_rule: number;
  @Column({
    name: 'gift_value',
    nullable: true,
  })
  gift_value: number;
  @Column({
    name: 'parent_pref_id',
    nullable: true,
  })
  parent_pref_id: number;
  @Column({
    name: 'parent_unit_id',
    nullable: true,
  })
  parent_unit_id: number;
  @Column({
    name: 'parent_brand_id',
    nullable: true,
  })
  parent_brand_id: number;
  @Column({
    name: 'parent_tp',
    nullable: true,
  })
  parent_tp: number;
  @Column({
    name: 'parent_qty_sold',
    nullable: true,
  })
  parent_qty_sold: number;
  @Column({
    name: 'parent_value_sold',
    nullable: true,
  })
  parent_value_sold: number;
  @Column({
    name: 'final_price',
    nullable: true,
  })
  final_price: number;
  @Column({
    name: 'is_return',
    nullable: true,
  })
  is_return: number;
  @Column({
    type: 'enum',
    enum: ItemStatus,
    name: 'return_type',
    nullable: true,
  })
  return_type: ItemStatus;
  @Column({
    name: 'campaign_id',
    nullable: true,
  })
  campaign_id: number;
  @Column({
    name: 'item_status',
    nullable: true,
  })
  item_status: number;
  @Column({
    name: 'dispatch_status',
    nullable: true,
  })
  dispatch_status: number;
  @Column({
    name: 'dispatch_qty',
    nullable: true,
  })
  dispatch_qty: number;
  @Column({
    name: 'dispatch_amount',
    nullable: true,
  })
  dispatch_amount: number;
  @Column({
    name: 'executed_status',
    nullable: true,
  })
  executed_status: number;
  @Column({
    name: 'executed_qty',
    nullable: true,
  })
  executed_qty: number;
  @Column({
    name: 'executed_amount',
    nullable: true,
  })
  executed_amount: number;
  @Column({
    name: 'reasoning',
    nullable: true,
  })
  reasoning: string;
  @Column({
    name: 'employee_id',
    nullable: true,
  })
  employee_id: number;
  @Column({
    name: 'update_history',
    nullable: true,
  })
  update_history: string;
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
    name: 'division_id',
    nullable: true,
  })
  division_id: number;
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
    name: 'quantity',
    nullable: true,
  })
  quantity: number;
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
    name: 'tax_class_id',
    nullable: true,
  })
  tax_class_id: number;
  @Column({
    name: 'tax_in_percentage',
    nullable: true,
  })
  tax_in_percentage: number;
  @Column({
    name: 'tax_in_value',
    nullable: true,
  })
  tax_in_value: number;
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
  @Column({
    name: 'retailer_id',
    nullable: true,
  })
  retailer_id: number;
  @Column({
    name: 'booking_date',
    nullable: true,
  })
  booking_date: number;
  @Column({
    name: 'updated_at',
    nullable: true,
  })
  updated_at: number;
  @Column({
    name: 'updated_by',
    nullable: true,
  })
  updated_by: number;
}
