import { Inject, Injectable } from '@nestjs/common';
import RegionAssignmentCity from 'src/entities/regionAssignmentCity';
import { RegionAssignmentCityRepositoryInterface } from 'src/repositories/region-assignment-city/regionAssignmentCity.reposiory.interface';

@Injectable()
export class RegionAssignmentCityService {
  constructor(
    @Inject('RegionAssignmentCityRepositoryInterface')
    private readonly repo: RegionAssignmentCityRepositoryInterface,
  ) {}

  async findAll(): Promise<RegionAssignmentCity[]> {
    const data = await this.repo.findAll();
    return data;
  }
}
