import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import DistributorProductsMargin from 'src/entities/distributorProductsMargin';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { DistributorProductsMarginRepositoryInterface } from './distributorProductMargin.reposiory.interface';

@Injectable()
export class DistributorProductsMarginLiveRepository
  extends BaseAbstractRepository<DistributorProductsMargin>
  implements DistributorProductsMarginRepositoryInterface
{
  constructor(
    @InjectRepository(DistributorProductsMargin, 'shahi')
    public readonly distributorProductsMarginLiveRepository: Repository<DistributorProductsMargin>,
  ) {
    super(distributorProductsMarginLiveRepository);
  }
}
