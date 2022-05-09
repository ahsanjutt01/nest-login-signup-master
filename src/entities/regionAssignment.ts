import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// TODO: relationship
@Entity({
  name: 'region_assignment',
})
export default class RegionAssignment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'region_id',
    nullable: true,
    type: 'int',
  })
  region_id: number;
  @Column({
    name: 'province_id',
    nullable: true,
    type: 'int',
  })
  province_id: number;
}
