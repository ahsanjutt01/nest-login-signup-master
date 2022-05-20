import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import DistributorsAssignment from 'src/entities/distributorsAssignment';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { DistributorsAssignmentRepositoryInterface } from './distributorAssignment.reposiory.interface';

@Injectable()
export class DistributorsAssignmentRepository
  extends BaseAbstractRepository<DistributorsAssignment>
  implements DistributorsAssignmentRepositoryInterface
{
  constructor(
    @InjectRepository(DistributorsAssignment)
    private readonly distributorsAssignmentRepository: Repository<DistributorsAssignment>,
  ) {
    super(distributorsAssignmentRepository);
  }
}
