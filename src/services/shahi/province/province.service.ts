import { Inject, Injectable } from '@nestjs/common';
import Province from 'src/entities/province';
import { ProvinceRepositoryInterface } from 'src/repositories/province/province.reposiory.interface';

@Injectable()
export class ProvinceService {
  constructor(
    @Inject('ProvinceRepositoryInterface')
    private readonly repo: ProvinceRepositoryInterface,
  ) {}

  async findAll(): Promise<Province[]> {
    const data = await this.repo.findAll();
    return data;
  }
}
