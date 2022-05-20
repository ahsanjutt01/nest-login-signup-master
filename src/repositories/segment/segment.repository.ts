import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Segment from 'src/entities/segment';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { SegmentRepositoryInterface } from './segment.reposiory.interface';

@Injectable()
export class SegmentRepository
  extends BaseAbstractRepository<Segment>
  implements SegmentRepositoryInterface
{
  constructor(
    @InjectRepository(Segment)
    private readonly SegmentRepository: Repository<Segment>,
  ) {
    super(SegmentRepository);
  }
}
