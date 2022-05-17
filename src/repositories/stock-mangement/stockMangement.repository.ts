import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import StockMangement from 'src/entities/stockManagement';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { StockMangementRepositoryInterface } from './stockMangement.reposiory.interface';

@Injectable()
export class StockMangementRepository
  extends BaseAbstractRepository<StockMangement>
  implements StockMangementRepositoryInterface
{
  constructor(
    @InjectRepository(StockMangement)
    private readonly stockMangementRepository: Repository<StockMangement>,
  ) {
    super(stockMangementRepository);
  }
}
