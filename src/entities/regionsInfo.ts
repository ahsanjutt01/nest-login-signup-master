import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// TODO: relationship
@Entity({
  name: 'regions_info',
})
export default class RegionsInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'region_name',
    nullable: true,
    type: 'varchar',
    length: 100,
  })
  region_name: number;
  @Column({
    name: 'region_poc_id',
    nullable: true,
    type: 'int',
  })
  region_poc_id: number;

  @Column({
    name: 'rsm',
    nullable: true,
    type: 'int',
  })
  rsm: number;
  @Column({
    name: 'divisions',
    nullable: true,
    type: 'varchar',
    length: 100,
  })
  divisions: string;
}
