import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import BaseEntity from './_base.entity';
// TODO: relationship
@Entity({
  name: 'similarity_index_result',
})
export default class SimilarityIndexResult extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'master_retailer',
    nullable: true,
  })
  master_retailer: number;
  @Column({
    name: 'child_retailer',
    nullable: true,
  })
  child_retailer: number;
  @Column({
    name: 'name',
    nullable: true,
    type: 'text',
  })
  name: string;
  @Column({
    name: 'address',
    nullable: true,
  })
  address: string;
  @Column({
    name: 'phone',
    nullable: true,
  })
  phone: number;
  @Column({
    name: 'radius',
    nullable: true,
  })
  radius: number;
  @Column({
    name: 'owner',
    nullable: true,
  })
  owner: number;
  @Column({
    name: 'segment',
    nullable: true,
  })
  segment: number;
  @Column({
    name: 'channel',
    nullable: true,
  })
  channel: number;
  @Column({
    name: 'total',
    nullable: true,
  })
  total: number;
  @Column({
    name: 'percent_range',
    nullable: true,
  })
  percent_range: string;
  @Column({
    name: 'neighbourhood',
    nullable: true,
  })
  neighbourhood: number;
  @Column({
    name: 'locality_id',
    nullable: true,
  })
  locality_id: number;
  @Column({
    name: 'job_done',
    nullable: true,
    type: 'tinyint',
  })
  job_done: number;
}
