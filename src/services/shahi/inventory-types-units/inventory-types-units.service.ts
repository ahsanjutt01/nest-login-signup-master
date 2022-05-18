import { Inject, Injectable } from '@nestjs/common';
import InventoryTypesUnits from 'src/entities/inventoryTypesUnit';
import { InventoryTypesUnitRepositoryInterface } from 'src/repositories/inventory-types-units/inventoryTypeUnit.reposiory.interface';

@Injectable()
export class InventoryTypesUnitsService {
  constructor(
    @Inject('InventoryTypesUnitRepositoryInterface')
    private readonly repo: InventoryTypesUnitRepositoryInterface,
  ) {}

  async findAll(): Promise<InventoryTypesUnits[]> {
    const data = await this.repo.findAll();
    return data;
  }
}
