import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import DistributorsAssignment from 'src/entities/distributorsAssignment';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { DistributorsAssignmentRepositoryInterface } from './distributorAssignment.reposiory.interface';

@Injectable()
export class DistributorsAssignmentLiveRepository
  extends BaseAbstractRepository<DistributorsAssignment>
  implements DistributorsAssignmentRepositoryInterface
{
  constructor(
    @InjectRepository(DistributorsAssignment, 'shahi')
    public readonly distributorsAssignmentLiveRepository: Repository<DistributorsAssignment>,
  ) {
    super(distributorsAssignmentLiveRepository);
  }
}
