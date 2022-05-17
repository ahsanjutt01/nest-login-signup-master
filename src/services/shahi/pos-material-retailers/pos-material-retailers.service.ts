import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import PosMaterialRetailer from 'src/entities/posMaterialRetailer';
import { Repository } from 'typeorm';

@Injectable()
export class PosMaterialRetailersService {
  constructor(
    @InjectRepository(
      PosMaterialRetailer,
      process.env.DATABASE_LIVE_CONNECTION_NAME,
    )
    private readonly repo: Repository<PosMaterialRetailer>,
  ) {}

  async getAll(): Promise<PosMaterialRetailer[]> {
    const data = await this.repo.find();
    return data;
  }
}
