import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// TODO: relationship
@Entity({
  name: 'route_retailers',
})
export default class RouteRetailer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'route_id',
    nullable: true,
  })
  route_id: number;
  @Column({
    name: 'retailer_id',
    nullable: true,
  })
  retailer_id: number;
  @Column({
    name: 'child_retailers',
    nullable: true,
    type: 'text',
  })
  child_retailers: string;
  @Column({
    name: 'retailer_name',
    nullable: true,
    type: 'varchar',
    length: 100,
  })
  retailer_name: string;
  @Column({
    name: 'priority',
    nullable: true,
    type: 'int',
  })
  priority: number;
}
