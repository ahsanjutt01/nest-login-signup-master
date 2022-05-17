import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Brand from 'src/entities/brand';
import InventoryTypesUnits from 'src/entities/inventoryTypesUnit';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { InventoryTypesUnitRepositoryInterface } from './inventoryTypeUnit.reposiory.interface';

@Injectable()
export class InventoryTypesUnitsRepository
  extends BaseAbstractRepository<InventoryTypesUnits>
  implements InventoryTypesUnitRepositoryInterface
{
  constructor(
    @InjectRepository(InventoryTypesUnits)
    private readonly inventoryTypesUnitsRepository: Repository<InventoryTypesUnits>,
  ) {
    super(inventoryTypesUnitsRepository);
  }
}
