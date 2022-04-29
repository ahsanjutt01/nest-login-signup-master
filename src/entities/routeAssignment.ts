import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// TODO: relationship
@Entity({
  name: 'route_assignments',
})
export default class RouteAssignment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'route_id',
    nullable: true,
  })
  route_id: number;

  @Column({
    name: 'employee_id',
    nullable: true,
  })
  employee_id: number;
}
