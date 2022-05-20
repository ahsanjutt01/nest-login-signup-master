import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import RegionAssignmentCity from 'src/entities/regionAssignmentCity';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { RegionAssignmentCityRepositoryInterface } from './regionAssignmentCity.reposiory.interface';

@Injectable()
export class RegionAssignmentCityLiveRepository
  extends BaseAbstractRepository<RegionAssignmentCity>
  implements RegionAssignmentCityRepositoryInterface
{
  constructor(
    @InjectRepository(RegionAssignmentCity, 'shahi')
    public readonly regionAssignmentCityLiveRepository: Repository<RegionAssignmentCity>,
  ) {
    super(regionAssignmentCityLiveRepository);
  }
}
