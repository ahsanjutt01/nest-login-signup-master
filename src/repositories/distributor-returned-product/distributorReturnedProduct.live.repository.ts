import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import DistributorReturnedProduct from 'src/entities/distributorReturnedProduct';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { DistributorReturnedProductRepositoryInterface } from './DistributorReturnedProduct.reposiory.interface';

@Injectable()
export class DistributorReturnedProductLiveRepository
  extends BaseAbstractRepository<DistributorReturnedProduct>
  implements DistributorReturnedProductRepositoryInterface
{
  constructor(
    @InjectRepository(
      DistributorReturnedProduct,
      process.env.DATABASE_LIVE_CONNECTION_NAME,
    )
    private readonly distributorReturnedProductLiveRepository: Repository<DistributorReturnedProduct>,
  ) {
    super(distributorReturnedProductLiveRepository);
  }
}
