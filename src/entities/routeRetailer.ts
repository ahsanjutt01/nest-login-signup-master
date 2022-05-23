import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import BaseEntity from './_base.entity';
// TODO: relationship
@Entity({
  name: 'route_retailers',
})
export default class RouteRetailer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column({
    name: 'route_id',
    nullable: true,
  })
  route_id: number;

  @Index()
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
