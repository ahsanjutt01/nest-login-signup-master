import { Inject, Injectable } from '@nestjs/common';
import DistributorReturnedProduct from 'src/entities/distributorReturnedProduct';
import { DistributorReturnedProductRepositoryInterface } from 'src/repositories/distributor-returned-product/DistributorReturnedProduct.reposiory.interface';

@Injectable()
export class DistributorReturnedProductService {
  constructor(
    @Inject('DistributorReturnedProductRepositoryInterface')
    private readonly repo: DistributorReturnedProductRepositoryInterface,
  ) {}

  async findAll(): Promise<DistributorReturnedProduct[]> {
    const data = await this.repo.findAll();
    return data;
  }
}
