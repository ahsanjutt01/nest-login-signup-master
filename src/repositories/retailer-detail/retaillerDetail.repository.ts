import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import RetailersDetail from 'src/entities/retailersDetail';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { RetailersDetailRepositoryInterface } from './retaillerDetail.reposiory.interface';

@Injectable()
export class RetailersDetailRepository
  extends BaseAbstractRepository<RetailersDetail>
  implements RetailersDetailRepositoryInterface
{
  constructor(
    @InjectRepository(RetailersDetail)
    private readonly retailersDetailRepository: Repository<RetailersDetail>,
  ) {
    super(retailersDetailRepository);
  }
}
