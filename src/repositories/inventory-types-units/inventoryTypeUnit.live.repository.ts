import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import InventoryTypesUnits from 'src/entities/inventoryTypesUnit';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { InventoryTypesUnitRepositoryInterface } from './inventoryTypeUnit.reposiory.interface';

@Injectable()
export class InventoryTypesUnitLiveRepository
  extends BaseAbstractRepository<InventoryTypesUnits>
  implements InventoryTypesUnitRepositoryInterface
{
  constructor(
    @InjectRepository(
      InventoryTypesUnits,
      process.env.DATABASE_LIVE_CONNECTION_NAME,
    )
    private readonly inventoryTypesUnitLiveRepository: Repository<InventoryTypesUnits>,
  ) {
    super(inventoryTypesUnitLiveRepository);
  }
}
