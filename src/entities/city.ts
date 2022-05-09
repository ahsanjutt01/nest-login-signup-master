import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// TODO: relationship
@Entity({
  name: 'cities',
})
export default class City {
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
    name: 'province_id',
    nullable: true,
    type: 'int',
  })
  province_id: number;
  @Column({
    name: 'type_id',
    nullable: true,
    type: 'int',
  })
  type_id: number;
}
