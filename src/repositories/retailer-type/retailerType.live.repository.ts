import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import RetailerType from 'src/entities/retailerType';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { RetailerTypeRepositoryInterface } from './retailerType.reposiory.interface';

@Injectable()
export class RetailerTypeLiveRepository
  extends BaseAbstractRepository<RetailerType>
  implements RetailerTypeRepositoryInterface
{
  constructor(
    @InjectRepository(RetailerType, 'shahi')
    private readonly retailerTypeLiveRepository: Repository<RetailerType>,
  ) {
    super(retailerTypeLiveRepository);
  }
}
