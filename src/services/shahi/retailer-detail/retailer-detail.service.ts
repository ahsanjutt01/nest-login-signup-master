import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import RetailersDetail from 'src/entities/retailersDetail';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class RetailerDetailService {
  constructor(
    @InjectRepository(
      RetailersDetail,
      process.env.DATABASE_LIVE_CONNECTION_NAME,
    )
    private readonly repo: Repository<RetailersDetail>,
  ) {}

  async getAll(): Promise<RetailersDetail[]> {
    const data = await this.repo.find();
    return data;
  }
}
