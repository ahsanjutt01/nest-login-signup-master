import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import VisitsMark from 'src/entities/visitsMarked';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { VisitsMarkRepositoryInterface } from './visitMark.reposiory.interface';

@Injectable()
export class VisitsMarkLiveRepository
  extends BaseAbstractRepository<VisitsMark>
  implements VisitsMarkRepositoryInterface
{
  constructor(
    @InjectRepository(VisitsMark, 'shahi')
    private readonly visitsMarkLiveRepository: Repository<VisitsMark>,
  ) {
    super(visitsMarkLiveRepository);
  }
}
