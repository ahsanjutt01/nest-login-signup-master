import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import BaseEntity from './_base.entity';
// TODO: relationship
@Entity({
  name: 'territory_management',
})
export default class TerritoryManagement extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'territory_name',
    nullable: true,
    type: 'varchar',
    length: 100,
  })
  territory_name: string;

  @Column({
    name: 'territory_poc_id',
    nullable: true,
    type: 'int',
  })
  territory_poc_id: number;
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
    length: 100,
  })
  divisions: string;
  @Column({
    name: 'area_id',
    nullable: true,
    type: 'int',
  })
  area_id: number;
}
