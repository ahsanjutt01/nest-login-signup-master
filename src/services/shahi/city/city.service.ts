import { Inject, Injectable } from '@nestjs/common';
import City from 'src/entities/city';
import { CityRepositoryInterface } from 'src/repositories/city/city.reposiory.interface';

@Injectable()
export class CityService {
  constructor(
    @Inject('CityRepositoryInterface')
    private readonly repo: CityRepositoryInterface,
  ) {}

  async findAll(): Promise<City[]> {
    const data = await this.repo.findAll();
    return data;
  }
}
