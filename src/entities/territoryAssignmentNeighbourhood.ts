import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
// TODO: relationship
@Entity({
  name: 'territory_assignment_neighbourhood',
})
export default class TerritoryAssignmentNeighbourhood {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
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

  @Index()
  @Column({
    name: 'territory_id',
    nullable: true,
    type: 'int',
  })
  territory_id: number;
}
