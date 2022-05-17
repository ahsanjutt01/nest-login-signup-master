import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import InventoryTypesUnits from 'src/entities/inventoryTypesUnit';
import { Repository } from 'typeorm';

@Injectable()
export class InventoryTypesUnitsService {
  constructor(
    @InjectRepository(
      InventoryTypesUnits,
      process.env.DATABASE_LIVE_CONNECTION_NAME,
    )
    private readonly repo: Repository<InventoryTypesUnits>,
  ) {}

  async getAll(): Promise<InventoryTypesUnits[]> {
    const data = await this.repo.find();
    return data;
  }
}
