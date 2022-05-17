import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import RetailerType from 'src/entities/retailerType';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { RetailerTypeRepositoryInterface } from './retailerType.reposiory.interface';

@Injectable()
export class RetailerTypeRepository
  extends BaseAbstractRepository<RetailerType>
  implements RetailerTypeRepositoryInterface
{
  constructor(
    @InjectRepository(RetailerType)
    private readonly retailerTypeRepository: Repository<RetailerType>,
  ) {
    super(retailerTypeRepository);
  }
}
