import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import BaseEntity from './_base.entity';
// TODO: relationship
@Entity({
  name: 'ams',
})
export default class Ams extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'ci_lat',
    type: 'double',
    nullable: true,
  })
  ci_lat: number;
  @Column({
    name: 'ci_lng',
    type: 'double',
    nullable: true,
  })
  ci_lng: number;
  @Column({
    name: 'co_lat',
    type: 'double',
    nullable: true,
  })
  co_lat: number;
  @Column({
    name: 'co_lng',
    type: 'double',
    nullable: true,
  })
  co_lng: number;
  @Column({
    name: 'shift_time',
    nullable: true,
    type: 'time',
  })
  shift_time: Date;
  @Index()
  @Column({
    name: 'employee_id',
    nullable: true,
  })
  employee_id: number;
  @Column({
    name: 'ci_within_radius',
    nullable: true,
    type: 'bool',
    width: 1,
  })
  ci_within_radius: boolean;
  @Column({
    name: 'co_within_radius',
    nullable: true,
    type: 'bool',
    width: 1,
  })
  co_within_radius: boolean;

  @Column({
    name: 'co_at',
    nullable: true,
    type: 'datetime',
    default: () => 'NOW()',
  })
  co_at: Date;
}
