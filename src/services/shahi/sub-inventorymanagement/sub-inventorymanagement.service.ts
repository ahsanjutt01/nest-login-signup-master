import { Inject, Injectable } from '@nestjs/common';
import SubInventoryManagement from 'src/entities/subInventoryManagement';
import { SubInventoryManagementRepositoryInterface } from 'src/repositories/sub-inventory-management/subInventoryManagement.reposiory.interface';

@Injectable()
export class SubInventorymanagementService {
  constructor(
    @Inject('SubInventoryManagementRepositoryInterface')
    private readonly repo: SubInventoryManagementRepositoryInterface,
  ) {}

  async findAll(): Promise<SubInventoryManagement[]> {
    const data = await this.repo.findAll();
    return data;
  }
}
