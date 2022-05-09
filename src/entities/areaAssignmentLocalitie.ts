import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// TODO: relationship
@Entity({
  name: 'area_assignment_localities',
})
export default class AreaAssignmentLocalitie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'city_id',
    nullable: true,
    type: 'int',
  })
  city_id: number;
  @Column({
    name: 'locality_id',
    nullable: true,
    type: 'int',
  })
  locality_id: number;
  @Column({
    name: 'area_id',
    nullable: true,
    type: 'int',
  })
  area_id: number;
}
