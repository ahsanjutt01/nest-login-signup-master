import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import BaseEntity from './_base.entity';
// TODO: relationship
@Entity({
  name: 'neighbourhood',
})
export default class Neighbourhood extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'name',
    nullable: true,
  })
  name: string;

  @Column({
    name: 'locality_id',
    nullable: true,
  })
  locality_id: number;

  @Column({
    name: 'type_id',
    nullable: true,
  })
  type_id: number;
}
