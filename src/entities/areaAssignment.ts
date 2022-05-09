import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// TODO: relationship
@Entity({
  name: 'area_assignment',
})
export default class AreaAssignment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'area_id',
    nullable: true,
    type: 'int',
  })
  area_id: number;
  @Column({
    name: 'city_id',
    nullable: true,
    type: 'int',
  })
  city_id: number;
}
