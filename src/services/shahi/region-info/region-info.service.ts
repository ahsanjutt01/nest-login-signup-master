import { Inject, Injectable } from '@nestjs/common';
import RegionsInfo from 'src/entities/regionsInfo';
import { RegionsInfoRepositoryInterface } from 'src/repositories/region-info/regionInfo.reposiory.interface';

@Injectable()
export class RegionInfoService {
  constructor(
    @Inject('RegionsInfoRepositoryInterface')
    private readonly repo: RegionsInfoRepositoryInterface,
  ) {}

  async findAll(): Promise<RegionsInfo[]> {
    const data = await this.repo.findAll();
    return data;
  }
}
