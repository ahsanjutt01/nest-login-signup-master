import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import DistributorReturnedProduct from 'src/entities/distributorReturnedProduct';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { DistributorReturnedProductRepositoryInterface } from './distributorReturnedProduct.reposiory.interface';

@Injectable()
export class DistributorReturnedProductRepository
  extends BaseAbstractRepository<DistributorReturnedProduct>
  implements DistributorReturnedProductRepositoryInterface
{
  constructor(
    @InjectRepository(DistributorReturnedProduct)
    private readonly distributorReturnedProductRepository: Repository<DistributorReturnedProduct>,
  ) {
    super(distributorReturnedProductRepository);
  }
}
