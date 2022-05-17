import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import StockMangement from 'src/entities/stockManagement';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { StockMangementRepositoryInterface } from './stockMangement.reposiory.interface';

@Injectable()
export class StockMangementLiveRepository
  extends BaseAbstractRepository<StockMangement>
  implements StockMangementRepositoryInterface
{
  constructor(
    @InjectRepository(StockMangement, process.env.DATABASE_LIVE_CONNECTION_NAME)
    private readonly stockMangementLiveRepository: Repository<StockMangement>,
  ) {
    super(stockMangementLiveRepository);
  }
}
