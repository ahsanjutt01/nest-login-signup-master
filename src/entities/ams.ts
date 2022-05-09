import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// TODO: relationship
@Entity({
  name: 'ams',
})
export default class Ams {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'ci_lat',
    nullable: true,
  })
  ci_lat: number;
  @Column({
    name: 'ci_lng',
    nullable: true,
  })
  ci_lng: number;
  @Column({
    name: 'co_lat',
    nullable: true,
  })
  co_lat: number;
  @Column({
    name: 'co_lng',
    nullable: true,
  })
  co_lng: number;
  @Column({
    name: 'shift_time',
    nullable: true,
    type: 'time',
  })
  shift_time: Date;
  @Column({
    name: 'employee_id',
    nullable: true,
  })
  employee_id: number;
  @Column({
    name: 'ci_within_radius',
    nullable: true,
    type: 'tinyint',
  })
  ci_within_radius: number;
  @Column({
    name: 'co_within_radius',
    nullable: true,
    type: 'tinyint',
  })
  co_within_radius: number;
  @Column({
    name: 'created_at',
    nullable: true,
    type: 'datetime',
    default: () => 'NOW()',
  })
  created_at: Date;

  @Column({
    name: 'co_at',
    nullable: true,
    type: 'datetime',
    default: () => 'NOW()',
  })
  co_at: Date;
}
