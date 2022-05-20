import { Inject, Injectable } from '@nestjs/common';
import TerritoryManagement from 'src/entities/territoryManagement';
import { TerritoryManagementRepositoryInterface } from 'src/repositories/territory-management/territoryManagement.reposiory.interface';

@Injectable()
export class TerritoryMangmentService {
  constructor(
    @Inject('TerritoryManagementRepositoryInterface')
    private readonly repo: TerritoryManagementRepositoryInterface,
  ) {}

  async findAll(): Promise<TerritoryManagement[]> {
    const data = await this.repo.findAll();
    return data;
  }
}
