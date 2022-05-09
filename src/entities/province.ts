import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// TODO: relationship
@Entity({
  name: 'provinces',
})
export default class Province {
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
