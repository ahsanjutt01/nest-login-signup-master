import { Column, Index } from 'typeorm';

export default class BaseEntity {
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
}
