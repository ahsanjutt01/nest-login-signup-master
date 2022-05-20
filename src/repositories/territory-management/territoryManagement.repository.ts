import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import TerritoryManagement from 'src/entities/territoryManagement';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { TerritoryManagementRepositoryInterface } from './territoryManagement.reposiory.interface';

@Injectable()
export class TerritoryManagementRepository
  extends BaseAbstractRepository<TerritoryManagement>
  implements TerritoryManagementRepositoryInterface
{
  constructor(
    @InjectRepository(TerritoryManagement)
    private readonly territoryManagementRepository: Repository<TerritoryManagement>,
  ) {
    super(territoryManagementRepository);
  }
}
