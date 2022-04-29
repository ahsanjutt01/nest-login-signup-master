import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { RetailerTypes } from './enums/retailerType';
// TODO: relationship
@Entity({
  name: 'retailer_types',
})
export default class RetailerType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'retailer_type_name',
    nullable: true,
  })
  retailer_type_name: string;
  @Column({
    name: 'discount',
    nullable: true,
  })
  discount: number;
  @Column({
    name: 'segment_id',
    nullable: true,
  })
  segment_id: number;
  @Column({
    name: 'retailer_or_distributor',
    nullable: true,
    type: 'enum',
    enum: RetailerTypes,
  })
  retailer_or_distributor: RetailerTypes;
  @Column({
    name: 'updated_by',
    nullable: true,
    type: 'datetime',
    default: () => 'NOW()',
  })
  updated_by: Date;
  @Column({
    name: 'updated_at',
    nullable: true,
    type: 'datetime',
    default: () => 'NOW()',
  })
  updated_at: Date;
}
