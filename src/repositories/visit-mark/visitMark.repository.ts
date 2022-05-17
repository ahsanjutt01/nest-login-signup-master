import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import VisitsMark from 'src/entities/visitsMarked';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { VisitsMarkRepositoryInterface } from './visitMark.reposiory.interface';

@Injectable()
export class VisitsMarkRepository
  extends BaseAbstractRepository<VisitsMark>
  implements VisitsMarkRepositoryInterface
{
  constructor(
    @InjectRepository(VisitsMark)
    private readonly visitsMarkRepository: Repository<VisitsMark>,
  ) {
    super(visitsMarkRepository);
  }
}
