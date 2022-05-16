import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import RetailerType from 'src/entities/retailerType';
import { Repository } from 'typeorm';

@Injectable()
export class RetailerTypeService {
  constructor(
    @InjectRepository(RetailerType, 'shahi')
    private readonly repo: Repository<RetailerType>,
  ) {}

  async getAll(): Promise<RetailerType[]> {
    const data = await this.repo.find();
    return data;
  }
}
