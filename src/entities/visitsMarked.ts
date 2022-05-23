import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import BaseEntity from './_base.entity';

// TODO: relationship
@Entity({
  name: 'visits_marked',
})
export default class VisitsMark extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
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
    name: 'distributor_id',
    nullable: true,
  })
  distributor_id: number;

  @Index()
  @Column({
    name: 'employee_id',
    nullable: true,
  })
  employee_id: number;

  @Column({
    name: 'took_order',
    nullable: true,
  })
  took_order: number;

  @Column({
    name: 'picture',
    type: 'text',
    nullable: true,
  })
  picture: number;

  @Column({
    name: 'latitude',
    nullable: true,
  })
  latitude: number;

  @Column({
    name: 'longitude',
    nullable: true,
  })
  longitude: number;

  @Column({
    name: 'distance',
    nullable: true,
  })
  distance: number;

  @Column({
    name: 'reason_id',
    nullable: true,
  })
  reason_id: number;

  @Column({
    name: 'reason',
    nullable: true,
  })
  reason: string;

  @Column({
    name: 'reason_picture',
    type: 'text',
    nullable: true,
  })
  reason_picture: number;

  @Column({
    name: 'visit_start_time',
    nullable: true,
    type: 'time',
  })
  visit_start_time: Date;

  @Column({
    name: 'visit_end_time',
    nullable: true,
    type: 'time',
  })
  visit_end_time: number;

  @Column({
    name: 'visit_end_lat',
    nullable: true,
  })
  visit_end_lat: number;

  @Column({
    name: 'visit_end_lng',
    nullable: true,
  })
  visit_end_lng: number;

  @Column({
    name: 'time_spent',
    nullable: true,
    type: 'time',
  })
  time_spent: number;

  @Column({
    name: 'within_radius',
    nullable: true,
  })
  within_radius: number;

  @Column({
    name: 'out_of_plan',
    nullable: true,
  })
  out_of_plan: boolean;

  @Index()
  @Column({
    name: 'unique_key',
    nullable: true,
  })
  unique_key: string;
}
