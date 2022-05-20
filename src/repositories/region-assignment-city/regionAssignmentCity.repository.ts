import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import RegionAssignmentCity from 'src/entities/regionAssignmentCity';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { RegionAssignmentCityRepositoryInterface } from './regionAssignmentCity.reposiory.interface';

@Injectable()
export class RegionAssignmentCityRepository
  extends BaseAbstractRepository<RegionAssignmentCity>
  implements RegionAssignmentCityRepositoryInterface
{
  constructor(
    @InjectRepository(RegionAssignmentCity)
    private readonly regionAssignmentCityRepository: Repository<RegionAssignmentCity>,
  ) {
    super(regionAssignmentCityRepository);
  }
}
