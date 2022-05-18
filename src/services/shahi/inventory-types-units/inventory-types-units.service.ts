import { Inject, Injectable } from '@nestjs/common';
import InventoryTypesUnits from 'src/entities/inventoryTypesUnit';
import { InventoryTypesUnitLiveRepository } from 'src/repositories/inventory-types-units/inventoryTypeUnit.live.repository';

@Injectable()
export class InventoryTypesUnitsService {
  constructor(
    @Inject('InventoryTypesUnitRepositoryInterface')
    private readonly repo: InventoryTypesUnitLiveRepository,
  ) {}

  async findAll(): Promise<InventoryTypesUnits[]> {
    const data = await this.repo.findAll();
    return data;
  }
}
