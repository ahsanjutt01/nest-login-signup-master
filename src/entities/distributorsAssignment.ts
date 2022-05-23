import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import BaseEntity from './_base.entity';
// TODO: relationship
@Entity({
  name: 'distributors_assignment',
})
export default class DistributorsAssignment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  region_name: number;
  @Column({
    name: 'distributor_id',
    nullable: true,
    type: 'int',
  })
  distributor_id: number;

  @Column({
    name: 'employee_id',
    nullable: true,
    type: 'int',
  })
  employee_id: number;
  @Column({
    name: 'assigned_for_day',
    nullable: true,
    type: 'varchar',
    length: 50,
  })
  assigned_for_day: string;
}
