import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { InOutStatus } from './enums/inOutStatus';
import { StockType } from './enums/stockType';
// TODO: relationship
@Entity({
  name: 'stock_mangement',
})
export default class StockMangement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'distributor_id',
    nullable: true,
  })
  distributor_id: number;
  @Column({
    name: 'pref_id',
    nullable: true,
  })
  pref_id: number;
  @Column({
    name: 'unit_id',
    nullable: true,
  })
  unit_id: number;
  @Column({
    name: 'item_id',
    nullable: true,
  })
  item_id: number;
  @Column({
    name: 'module',
    nullable: true,
  })
  module: string;
  @Column({
    name: 'type',
    nullable: true,
    type: 'enum',
    enum: StockType,
  })
  type: StockType;
  @Column({
    name: 'table',
    nullable: true,
  })
  table: string;
  @Column({
    name: 'table_id',
    nullable: true,
  })
  table_id: number;
  @Column({
    name: 'status',
    nullable: true,
    type: 'enum',
    enum: InOutStatus,
  })
  status: InOutStatus;
  @Column({
    name: 'item_name',
    nullable: true,
  })
  item_name: string;
  @Column({
    name: 'unit_name',
    nullable: true,
  })
  unit_name: string;
  @Column({
    name: 'quantity',
    nullable: true,
  })
  quantity: number;
  @Column({
    name: 'child_quantity',
    nullable: true,
  })
  child_quantity: number;
  @Column({
    name: 'balance',
    nullable: true,
  })
  balance: number;
  @Column({
    name: 'damage',
    nullable: true,
  })
  damage: number;
  @Column({
    name: 'created_by',
    nullable: true,
  })
  created_by: number;
  @Column({
    name: 'updated_by',
    nullable: true,
  })
  updated_by: number;
  @Column({
    name: 'is_opening_stock',
    nullable: true,
  })
  is_opening_stock: number;
  @Column({
    name: 'created_at',
    nullable: true,
    type: 'datetime',
    default: () => 'NOW()',
  })
  created_at: Date;
  @Column({
    name: 'updated_at',
    nullable: true,
    type: 'datetime',
    default: () => 'NOW()',
  })
  updated_at: Date;
}
