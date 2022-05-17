import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import SpecialDiscount from 'src/entities/specialDiscount';
import { Repository } from 'typeorm';

@Injectable()
export class SpecialDiscountService {
  constructor(
    @InjectRepository(
      SpecialDiscount,
      process.env.DATABASE_LIVE_CONNECTION_NAME,
    )
    private readonly repo: Repository<SpecialDiscount>,
  ) {}

  async getAll(): Promise<SpecialDiscount[]> {
    const data = await this.repo.find();
    return data;
  }
}
