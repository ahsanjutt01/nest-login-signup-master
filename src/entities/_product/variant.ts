import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  JoinTable,
  ManyToOne,
} from 'typeorm';
import BaseEntity from '../_base.entity';
import Pack from './pack';
import Product from './product';
import Size from './size';

@Entity({
  name: 'variants',
})
export default class Variant extends BaseEntity {
  // @PrimaryGeneratedColumn('uuid')
  // id: number;

  @Column({
    name: 'ctnQuantity',
    nullable: false,
    type: 'int',
  })
  ctnQuantity: number;

  @Column({
    name: 'quantity',
    nullable: false,
    type: 'int',
  })
  quantity: number;

  @Column({
    name: 'bonusPcs',
    nullable: false,
    type: 'int',
  })
  bonusPcs: number;

  @Column({
    name: 'purchasePrice',
    nullable: false,
    type: 'double',
  })
  purchasePrice: number;

  @Column({
    name: 'retailPrice',
    nullable: false,
    type: 'double',
  })
  retailPrice: number;

  @Column({
    name: 'minStockQty',
    nullable: false,
    type: 'int',
  })
  minStockQty: number;

  @Column({
    name: 'productId',
    nullable: false,
  })
  @Generated('uuid')
  productId: string;

  //    user realtionship
  @ManyToOne(() => Product, (prod) => prod.variants)
  @JoinColumn({ name: 'productId', referencedColumnName: 'id' })
  @JoinTable({ name: 'products' })
  product: Product;

  @Column({
    name: 'packId',
    nullable: false,
  })
  @Generated('uuid')
  packId: string;

  //    user realtionship
  @ManyToOne(() => Pack, (pack) => pack.variants)
  @JoinColumn({ name: 'packId', referencedColumnName: 'id' })
  @JoinTable({ name: 'packs' })
  pack: Pack;

  @Column({
    name: 'sizeId',
    nullable: false,
  })
  @Generated('uuid')
  sizeId: string;

  //    user realtionship
  @ManyToOne(() => Size, (size) => size.variants)
  @JoinColumn({ name: 'sizeId', referencedColumnName: 'id' })
  @JoinTable({ name: 'sizes' })
  size: Size;
}
