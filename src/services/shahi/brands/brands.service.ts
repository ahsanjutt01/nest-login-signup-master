import { Inject, Injectable } from '@nestjs/common';
import Brand from 'src/entities/brand';
import { BrandRepositoryInterface } from 'src/repositories/brand/brand.reposiory.interface';

@Injectable()
export class BrandsService {
  constructor(
    @Inject('BrandRepositoryInterface')
    private readonly repo: BrandRepositoryInterface,
  ) {}

  async findAll(): Promise<Brand[]> {
    const data = await this.repo.findAll();
    return data;
  }
}
