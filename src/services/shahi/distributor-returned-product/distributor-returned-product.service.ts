import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import DistributorReturnedProduct from 'src/entities/distributorReturnedProduct';
import { DistributorReturnedProductLiveRepository } from 'src/repositories/distributor-returned-product/distributorReturnedProduct.live.repository';
import { Repository } from 'typeorm';

@Injectable()
export class DistributorReturnedProductService {
  constructor(
    @Inject('DistributorReturnedProductRepositoryInterface')
    private readonly repo: DistributorReturnedProductLiveRepository,
  ) {}

  async findAll(): Promise<DistributorReturnedProduct[]> {
    const data = await this.repo.findAll();
    return data;
  }
}
