import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Brand from 'src/entities/brand';
import { Repository } from 'typeorm';

@Injectable()
export class BrandsService {
  constructor(
    @InjectRepository(Brand, 'shahi')
    private readonly repo: Repository<Brand>,
  ) {}

  async getAll(): Promise<Brand[]> {
    const data = await this.repo.find();
    return data;
  }
}