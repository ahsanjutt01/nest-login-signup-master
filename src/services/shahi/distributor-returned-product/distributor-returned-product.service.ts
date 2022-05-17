import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import DistributorReturnedProduct from 'src/entities/distributorReturnedProduct';
import { Repository } from 'typeorm';

@Injectable()
export class DistributorReturnedProductService {
  constructor(
    @InjectRepository(
      DistributorReturnedProduct,
      process.env.DATABASE_LIVE_CONNECTION_NAME,
    )
    private readonly repo: Repository<DistributorReturnedProduct>,
  ) {}

  async getAll(): Promise<DistributorReturnedProduct[]> {
    const data = await this.repo.find();
    return data;
  }
}
