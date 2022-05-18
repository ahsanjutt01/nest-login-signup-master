import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import AreaAssignment from 'src/entities/areaAssignment';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { AreaAssignmentRepositoryInterface } from './areaAssignment.reposiory.interface';

@Injectable()
export class AreaAssignmentLiveRepository
  extends BaseAbstractRepository<AreaAssignment>
  implements AreaAssignmentRepositoryInterface
{
  constructor(
    @InjectRepository(AreaAssignment, 'shahi')
    public readonly areaAssignmentLiveRepository: Repository<AreaAssignment>,
  ) {
    super(areaAssignmentLiveRepository);
  }
}
