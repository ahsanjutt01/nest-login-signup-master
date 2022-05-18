import { Inject, Injectable } from '@nestjs/common';
import InventoryPreference from 'src/entities/inventoryPreference';
import { InventoryPreferenceLiveRepository } from 'src/repositories/inventory-preference/inventoryPreference.live.repository';

@Injectable()
export class InventoryPreferenceService {
  constructor(
    @Inject('InventoryPreferenceRepositoryInterface')
    private readonly repo: InventoryPreferenceLiveRepository,
  ) {}

  async findAll(): Promise<InventoryPreference[]> {
    const data = await this.repo.findAll();
    return data;
  }
}
