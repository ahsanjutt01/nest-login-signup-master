import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// TODO: relationship
@Entity({
  name: 'territory_assignment_neighbourhood',
})
export default class TerritoryAssignmentNeighbourhood {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'neighbourhood_id',
    nullable: true,
    type: 'int',
  })
  neighbourhood_id: number;
  @Column({
    name: 'locality_id',
    nullable: true,
    type: 'int',
  })
  locality_id: number;
  @Column({
    name: 'territory_id',
    nullable: true,
    type: 'int',
  })
  territory_id: number;
}
