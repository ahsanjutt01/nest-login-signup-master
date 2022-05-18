import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import RetailersDetail from 'src/entities/retailersDetail';
import { RetailersDetailLiveRepository } from 'src/repositories/retailer-detail/retaillerDetail.live.repository';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class RetailerDetailService {
  constructor(
    @Inject('RetailersDetailRepositoryInterface')
    private readonly repo: RetailersDetailLiveRepository,
  ) {}

  async findAll(): Promise<RetailersDetail[]> {
    const data = await this.repo.findAll();
    return data;
  }
}
