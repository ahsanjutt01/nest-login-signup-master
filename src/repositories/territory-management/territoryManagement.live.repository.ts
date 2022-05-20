import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import TerritoryManagement from 'src/entities/territoryManagement';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { TerritoryManagementRepositoryInterface } from './territoryManagement.reposiory.interface';

@Injectable()
export class TerritoryManagementLiveRepository
  extends BaseAbstractRepository<TerritoryManagement>
  implements TerritoryManagementRepositoryInterface
{
  constructor(
    @InjectRepository(TerritoryManagement, 'shahi')
    public readonly territoryManagementLiveRepository: Repository<TerritoryManagement>,
  ) {
    super(territoryManagementLiveRepository);
  }
}
