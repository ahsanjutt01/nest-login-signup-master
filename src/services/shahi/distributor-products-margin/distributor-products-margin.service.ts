import { Inject, Injectable } from '@nestjs/common';
import DistributorProductsMargin from 'src/entities/distributorProductsMargin';
import { DistributorProductsMarginRepositoryInterface } from 'src/repositories/distributor-product-margin/distributorProductMargin.reposiory.interface';

@Injectable()
export class DistributorProductsMarginService {
  constructor(
    @Inject('DistributorProductsMarginRepositoryInterface')
    private readonly repo: DistributorProductsMarginRepositoryInterface,
  ) {}

  async findAll(): Promise<DistributorProductsMargin[]> {
    const data = await this.repo.findAll();
    return data;
  }
}
