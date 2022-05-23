import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import BaseEntity from './_base.entity';
// TODO: relationship
@Entity({
  name: 'area_assignment',
})
export default class AreaAssignment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'area_id',
    nullable: true,
    type: 'int',
  })
  area_id: number;

  @Index()
  @Column({
    name: 'city_id',
    nullable: true,
    type: 'int',
  })
  city_id: number;
}
