import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import InventoryPreference from 'src/entities/inventoryPreference';
import { Repository } from 'typeorm';

@Injectable()
export class InventoryPreferenceService {
  constructor(
    @InjectRepository(
      InventoryPreference,
      process.env.DATABASE_LIVE_CONNECTION_NAME,
    )
    private readonly repo: Repository<InventoryPreference>,
  ) {}

  async getAll(): Promise<InventoryPreference[]> {
    const data = await this.repo.find();
    return data;
  }
}
