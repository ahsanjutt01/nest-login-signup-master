import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// TODO: relationship
@Entity({
  name: 'brands',
})
export default class Brand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'name',
    nullable: true,
    type: 'varchar',
    length: 100,
  })
  name: string;
}
