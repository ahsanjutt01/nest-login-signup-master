import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// TODO: relationship
@Entity({
  name: 'segments',
})
export default class Segment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'name',
    nullable: true,
    type: 'varchar',
    length: 100,
  })
  name: string;

  @Column({
    name: 'discount',
    nullable: true,
    type: 'double',
  })
  discount: string;
}
