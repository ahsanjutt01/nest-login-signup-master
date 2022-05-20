import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// TODO: relationship
@Entity({
  name: 'area_management',
})
export default class AreaManagement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'area_name',
    nullable: true,
    type: 'varchar',
    length: 100,
  })
  area_name: string;

  @Column({
    name: 'area_poc_id',
    nullable: true,
    type: 'int',
  })
  area_poc_id: number;
  @Column({
    name: 'asm',
    nullable: true,
    type: 'int',
  })
  asm: number;
  @Column({
    name: 'divisions',
    nullable: true,
    type: 'varchar',
    length: 20,
  })
  divisions: string;
  @Column({
    name: 'region_id',
    nullable: true,
    type: 'int',
  })
  region_id: number;
}
