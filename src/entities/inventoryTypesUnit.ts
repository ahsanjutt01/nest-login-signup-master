import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import BaseEntity from './_base.entity';
// TODO: relationship
@Entity({
  name: 'inventory_types_units',
})
export default class InventoryTypesUnits extends BaseEntity {
  @Index()
  @PrimaryGeneratedColumn()
  unit_id: number;

  @Column({
    name: 'unit_name',
    nullable: true,
  })
  unit_name: string;

  @Column({
    name: 'unit_short_name',
    nullable: true,
  })
  unit_short_name: string;

  @Column({
    name: 'unit_plural_name',
    nullable: true,
  })
  unit_plural_name: string;

  @Index()
  @Column({
    name: 'packaging_type',
    nullable: true,
  })
  packaging_type: number;

  @Column({
    name: 'is_carton',
    nullable: true,
  })
  is_carton: boolean;
}
