import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import RetailerType from 'src/entities/retailerType';
import { Repository } from 'typeorm';

@Injectable()
export class RetailerTypeService {
  constructor(
    @InjectRepository(RetailerType, process.env.DATABASE_LIVE_CONNECTION_NAME)
    private readonly repo: Repository<RetailerType>,
  ) {}

  async getAll(): Promise<RetailerType[]> {
    const data = await this.repo.find();
    return data;
  }
}
