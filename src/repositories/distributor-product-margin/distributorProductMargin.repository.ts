import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import DistributorProductsMargin from 'src/entities/distributorProductsMargin';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { DistributorProductsMarginRepositoryInterface } from './distributorProductMargin.reposiory.interface';

@Injectable()
export class DistributorProductsMarginRepository
  extends BaseAbstractRepository<DistributorProductsMargin>
  implements DistributorProductsMarginRepositoryInterface
{
  constructor(
    @InjectRepository(DistributorProductsMargin)
    private readonly distributorProductsMarginRepository: Repository<DistributorProductsMargin>,
  ) {
    super(distributorProductsMarginRepository);
  }
}
