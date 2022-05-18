import { Inject, Injectable } from '@nestjs/common';
import RetailersDetail from 'src/entities/retailersDetail';
import { RetailersDetailRepositoryInterface } from 'src/repositories/retailer-detail/retaillerDetail.reposiory.interface';

@Injectable()
export class RetailerDetailService {
  constructor(
    @Inject('RetailersDetailRepositoryInterface')
    private readonly repo: RetailersDetailRepositoryInterface,
  ) {}

  async findAll(): Promise<RetailersDetail[]> {
    const data = await this.repo.findAll();
    return data;
  }
}
