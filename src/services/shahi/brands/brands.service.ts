import { Inject, Injectable } from '@nestjs/common';
import Brand from 'src/entities/brand';
import { BrandRepository } from 'src/repositories/brand/brand.repository';

@Injectable()
export class BrandsService {
  constructor(
    @Inject('BrandRepositoryInterface')
    private readonly repo: BrandRepository,
  ) {}

  async findAll(): Promise<Brand[]> {
    const data = await this.repo.findAll();
    return data;
  }
}
