import { Inject, Injectable } from '@nestjs/common';
import StockMangement from 'src/entities/stockManagement';
import { StockMangementRepositoryInterface } from 'src/repositories/stock-mangement/stockMangement.reposiory.interface';

@Injectable()
export class StockMangementService {
  constructor(
    @Inject('StockMangementRepositoryInterface')
    private readonly repo: StockMangementRepositoryInterface,
  ) {}

  async findAll(): Promise<StockMangement[]> {
    const data = await this.repo.findAll();
    return data;
  }
}
