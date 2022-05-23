import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import BaseEntity from './_base.entity';
// TODO: relationship
@Entity({
  name: 'designations',
})
export default class Designation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'designation',
    nullable: true,
    type: 'varchar',
    length: 300,
  })
  designation: string;
  @Column({
    name: 'designation_type',
    nullable: true,
    type: 'varchar',
    length: 20,
  })
  designation_type: number;

  @Column({
    name: 'flags',
    nullable: true,
    type: 'bool',
    width: 1,
  })
  flags: boolean;

  @Column({
    name: 'created_by',
    nullable: true,
    type: 'int',
  })
  created_by: number;
  @Column({
    name: 'updated_by',
    nullable: true,
    type: 'int',
  })
  updated_by: number;
}
