import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// TODO: relationship
@Entity({
  name: 'schemes',
})
export default class Scheme {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'division_id',
    nullable: true,
    type: 'int',
  })
  division_id: number;

  @Column({
    name: 'title',
    nullable: true,
    type: 'varchar',
    length: 100,
  })
  title: string;
  @Column({
    name: 'min_qty',
    nullable: true,
    type: 'int',
  })
  min_qty: number;
  @Column({
    name: 'quantity_free',
    nullable: true,
    type: 'int',
  })
  quantity_free: number;
  @Column({
    name: 'discount_on_tp',
    nullable: true,
    type: 'int',
  })
  discount_on_tp: number;
  @Column({
    name: 'gift_name',
    nullable: true,
    type: 'varchar',
  })
  gift_name: string;
  @Column({
    name: 'gift_value',
    nullable: true,
    type: 'int',
  })
  gift_value: number;
  @Column({
    name: 'gift_picture',
    nullable: true,
    type: 'varchar',
    length: 500,
  })
  gift_picture: string;
  @Column({
    name: 'start_date',
    nullable: true,
    type: 'datetime',
    default: () => 'NOW()',
  })
  start_date: Date;
  @Column({
    name: 'end_date',
    nullable: true,
    type: 'datetime',
    default: () => 'NOW()',
  })
  end_date: Date;
  @Column({
    name: 'scheme_rule',
    nullable: true,
    type: 'tinyint',
  })
  scheme_rule: number;
  @Column({
    name: 'scheme_type',
    nullable: true,
    type: 'varchar',
    length: 50,
  })
  scheme_type: string;
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
  @Column({
    name: 'updated_by',
    nullable: true,
    type: 'int',
  })
  updated_by: number;
}
