import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// TODO: relationship
@Entity({
  name: 'pos_material_retailers',
})
export default class PosMaterialRetailer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'pos_id',
    nullable: true,
  })
  pos_id: number;
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
    name: 'picture',
    nullable: true,
  })
  picture: string;
  @Column({
    name: 'tag_type',
    nullable: true,
    type: 'tinyint',
  })
  tag_type: number;
  @Column({
    name: 'deployment_date',
    nullable: true,
    type: 'datetime',
    default: () => 'NOW()',
  })
  deployment_date: Date;
  @Column({
    name: 'asset_id',
    nullable: true,
  })
  asset_id: string;
  @Column({
    name: 'unique_key',
    nullable: true,
    unique: true,
  })
  unique_key: string;
  @Column({
    name: 'updated_by',
    nullable: true,
  })
  updated_by: number;
  @Column({
    name: 'updated_by_sales_team',
    nullable: true,
  })
  updated_by_sales_team: number;
  @Column({
    name: 'is_removed',
    nullable: true,
  })
  is_removed: number;
  @Column({
    name: 'removed_by',
    nullable: true,
  })
  removed_by: number;
  @Column({
    name: 'employee_id',
    nullable: true,
  })
  employee_id: number;
  @Column({
    name: 'created_at',
    nullable: true,
    type: 'datetime',
    default: () => 'NOW()',
  })
  created_at: Date;
}
