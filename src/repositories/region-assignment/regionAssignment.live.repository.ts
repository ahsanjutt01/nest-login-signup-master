import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import RegionAssignment from 'src/entities/regionAssignment';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { RegionAssignmentRepositoryInterface } from './regionAssignment.reposiory.interface';

@Injectable()
export class RegionAssignmentLiveRepository
  extends BaseAbstractRepository<RegionAssignment>
  implements RegionAssignmentRepositoryInterface
{
  constructor(
    @InjectRepository(RegionAssignment, 'shahi')
    public readonly regionAssignmentLiveRepository: Repository<RegionAssignment>,
  ) {
    super(regionAssignmentLiveRepository);
  }
}
