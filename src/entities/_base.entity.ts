import { Column, Index, PrimaryGeneratedColumn } from 'typeorm';

export default class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Index()
  @Column({
    name: 'updated_at',
    nullable: false,
    type: 'datetime',
    default: () => 'NOW()',
  })
  updated_at: Date;

  @Index()
  @Column({
    name: 'created_at',
    nullable: false,
    type: 'datetime',
    default: () => 'NOW()',
  })
  created_at: Date;

  @Column({
    name: 'isActive',
    nullable: true,
    type: 'bool',
    width: 1,
  })
  isActive: boolean;

  @Column({
    name: 'isDeleted',
    nullable: true,
    type: 'bool',
    width: 1,
  })
  isDeleted: boolean;

  @Column({
    name: 'isPurged',
    nullable: true,
    type: 'bool',
    width: 1,
  })
  isPurged: boolean;
}
