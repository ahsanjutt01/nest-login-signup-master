import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import InventoryPreference from 'src/entities/inventoryPreference';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { InventoryPreferenceRepositoryInterface } from './inventoryPreference.reposiory.interface';

@Injectable()
export class InventoryPrefernceRepository
  extends BaseAbstractRepository<InventoryPreference>
  implements InventoryPreferenceRepositoryInterface
{
  constructor(
    @InjectRepository(InventoryPreference)
    private readonly inventoryPreferenceRepository: Repository<InventoryPreference>,
  ) {
    super(inventoryPreferenceRepository);
  }
}
