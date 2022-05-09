import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// TODO: relationship
@Entity({
  name: 'distributor_products_margin',
})
export default class DistributorProductsMargin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'distributor_type_id',
    nullable: true,
    type: 'int',
  })
  distributor_type_id: number;
  @Column({
    name: 'discount',
    nullable: true,
    type: 'int',
  })
  discount: number;
  @Column({
    name: 'pref_id',
    nullable: true,
    type: 'int',
  })
  pref_id: number;
}
