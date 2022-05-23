import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import BaseEntity from './_base.entity';
// TODO: relationship
@Entity({
  name: 'route_assignments',
})
export default class RouteAssignment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column({
    name: 'route_id',
    nullable: true,
  })
  route_id: number;

  @Index()
  @Column({
    name: 'employee_id',
    nullable: true,
  })
  employee_id: number;
}
