import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// TODO: relationship
@Entity({
  name: 'special_discount',
})
export default class SpecialDiscount {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'segment_id',
    nullable: true,
  })
  segment_id: number;

  @Column({
    name: 'pref_id',
    nullable: true,
  })
  pref_id: number;

  @Column({
    name: 'discount',
    nullable: true,
  })
  discount: number;

  @Column({
    name: 'region_id',
    nullable: true,
  })
  region_id: number;

  @Column({
    name: 'created_by',
    nullable: true,
  })
  created_by: number;

  @Column({
    name: 'created_at',
    nullable: true,
    type: 'datetime',
    default: () => 'NOW()',
  })
  created_at: Date;
}
