import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// TODO: relationship
@Entity({
  name: 'region_assignment_cities',
})
export default class RegionAssignmentCity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'city_id',
    nullable: true,
    type: 'int',
  })
  city_id: number;
  @Column({
    name: 'province_id',
    nullable: true,
    type: 'int',
  })
  province_id: number;
  @Column({
    name: 'region_id',
    nullable: true,
    type: 'int',
  })
  region_id: number;
}
