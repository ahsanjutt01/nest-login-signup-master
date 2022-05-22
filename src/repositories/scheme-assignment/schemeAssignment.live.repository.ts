import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import SchemeAssignment from 'src/entities/schemeAssignment';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { SchemeAssignmentRepositoryInterface } from './schemeAssignment.reposiory.interface';

@Injectable()
export class SchemeAssignmentLiveRepository
  extends BaseAbstractRepository<SchemeAssignment>
  implements SchemeAssignmentRepositoryInterface
{
  constructor(
    @InjectRepository(SchemeAssignment, 'shahi')
    public readonly schemeAssignmentLiveRepository: Repository<SchemeAssignment>,
  ) {
    super(schemeAssignmentLiveRepository);
  }
}
