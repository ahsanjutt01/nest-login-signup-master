import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Brand from 'src/entities/brand';
import InventoryPreference from 'src/entities/inventoryPreference';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { InventoryPreferenceRepositoryInterface } from './inventoryPreference.reposiory.interface';

@Injectable()
export class InventoryPreferenceLiveRepository
  extends BaseAbstractRepository<InventoryPreference>
  implements InventoryPreferenceRepositoryInterface
{
  constructor(
    @InjectRepository(
      InventoryPreference,
      process.env.DATABASE_LIVE_CONNECTION_NAME,
    )
    private readonly inventoryPreferenceLiveRepository: Repository<InventoryPreference>,
  ) {
    super(inventoryPreferenceLiveRepository);
  }
}
