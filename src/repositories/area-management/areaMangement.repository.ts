import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import AreaManagement from 'src/entities/areaManagement';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { AreaManagementRepositoryInterface } from './areaMangement.reposiory.interface';

@Injectable()
export class AreaManagementRepository
  extends BaseAbstractRepository<AreaManagement>
  implements AreaManagementRepositoryInterface
{
  constructor(
    @InjectRepository(AreaManagement)
    private readonly AreaManagementRepository: Repository<AreaManagement>,
  ) {
    super(AreaManagementRepository);
  }
}
