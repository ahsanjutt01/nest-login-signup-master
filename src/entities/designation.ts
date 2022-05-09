import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// TODO: relationship
@Entity({
  name: 'designations',
})
export default class Designation {
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
    type: 'tinyint',
  })
  flags: number;

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

  @Column({
    name: 'created_at',
    nullable: true,
    type: 'datetime',
    default: () => 'NOW()',
  })
  created_at: Date;
  @Column({
    name: 'updated_at',
    nullable: true,
    type: 'datetime',
    default: () => 'NOW()',
  })
  updated_at: Date;
}
