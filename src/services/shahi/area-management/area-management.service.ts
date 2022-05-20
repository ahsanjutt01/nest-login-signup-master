import { Inject, Injectable } from '@nestjs/common';
import AreaManagement from 'src/entities/areaManagement';
import { AreaManagementRepositoryInterface } from 'src/repositories/area-management/areaMangement.reposiory.interface';

@Injectable()
export class AreaManagementService {
  constructor(
    @Inject('AreaManagementRepositoryInterface')
    private readonly repo: AreaManagementRepositoryInterface,
  ) {}

  async findAll(): Promise<AreaManagement[]> {
    const data = await this.repo.findAll();
    return data;
  }
}
