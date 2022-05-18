import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import RegionAssignment from 'src/entities/regionAssignment';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { RegionAssignmentRepositoryInterface } from './regionAssignment.reposiory.interface';

@Injectable()
export class RegionAssignmentRepository
  extends BaseAbstractRepository<RegionAssignment>
  implements RegionAssignmentRepositoryInterface
{
  constructor(
    @InjectRepository(RegionAssignment)
    private readonly regionAssignmentRepository: Repository<RegionAssignment>,
  ) {
    super(regionAssignmentRepository);
  }
}
