import { Inject, Injectable } from '@nestjs/common';
import RetailerType from 'src/entities/retailerType';
import { RetailerTypeLiveRepository } from 'src/repositories/retailer-type/retailerType.live.repository';

@Injectable()
export class RetailerTypeService {
  constructor(
    @Inject('RetailerTypeRepositoryInterface')
    private readonly repo: RetailerTypeLiveRepository,
  ) {}

  async findAll(): Promise<RetailerType[]> {
    const data = await this.repo.findAll();
    return data;
  }
}
