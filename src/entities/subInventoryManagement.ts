import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// TODO: relationship
@Entity({
  name: 'sub_inventory_management',
})
export default class SubInventoryManagement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'inside_this_item_pref_id',
    nullable: true,
    type: 'int',
  })
  inside_this_item_pref_id: number;
  @Column({
    name: 'quantity',
    nullable: true,
    type: 'int',
  })
  quantity: number;
  @Column({
    name: 'item_inside_pref_id',
    nullable: true,
    type: 'int',
  })
  item_inside_pref_id: number;
}