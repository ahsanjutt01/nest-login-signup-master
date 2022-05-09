import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// TODO: relationship
@Entity({
  name: 'scheme_assignment',
})
export default class SchemeAssignment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'segment_id',
    nullable: true,
    type: 'int',
  })
  segment_id: number;
  @Column({
    name: 'channel_id',
    nullable: true,
    type: 'int',
  })
  channel_id: number;
  @Column({
    name: 'territories',
    nullable: true,
    type: 'text',
  })
  territories: string;
  @Column({
    name: 'scheme_id',
    nullable: true,
    type: 'int',
  })
  scheme_id: number;
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
    name: 'updated_at',
    nullable: true,
    type: 'datetime',
    default: () => 'NOW()',
  })
  updated_at: Date;
  @Column({
    name: 'created_at',
    nullable: true,
    type: 'datetime',
    default: () => 'NOW()',
  })
  created_at: Date;
}
