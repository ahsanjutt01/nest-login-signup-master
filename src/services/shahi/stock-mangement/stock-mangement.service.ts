import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import StockMangement from 'src/entities/stockManagement';
import { Repository } from 'typeorm';

@Injectable()
export class StockMangementService {
  constructor(
    @InjectRepository(StockMangement, 'shahi')
    private readonly repo: Repository<StockMangement>,
  ) {}

  async getAll(): Promise<StockMangement[]> {
    const data = await this.repo.find();
    return data;
  }
}
