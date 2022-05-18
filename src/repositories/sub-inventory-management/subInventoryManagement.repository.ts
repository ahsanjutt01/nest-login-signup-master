import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import SubInventoryManagement from 'src/entities/subInventoryManagement';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { SubInventoryManagementRepositoryInterface } from './subInventoryManagement.reposiory.interface';

@Injectable()
export class SubInventoryManagementRepository
  extends BaseAbstractRepository<SubInventoryManagement>
  implements SubInventoryManagementRepositoryInterface
{
  constructor(
    @InjectRepository(SubInventoryManagement)
    private readonly subInventoryManagementRepository: Repository<SubInventoryManagement>,
  ) {
    super(subInventoryManagementRepository);
  }
}
