import { Inject, Injectable } from '@nestjs/common';
import InventoryPreference from 'src/entities/inventoryPreference';
import { InventoryPreferenceRepositoryInterface } from 'src/repositories/inventory-preference/inventoryPreference.reposiory.interface';

@Injectable()
export class InventoryPreferenceService {
  constructor(
    @Inject('InventoryPreferenceRepositoryInterface')
    private readonly repo: InventoryPreferenceRepositoryInterface,
  ) {}

  async findAll(): Promise<InventoryPreference[]> {
    const data = await this.repo.findAll();
    return data;
  }
}
