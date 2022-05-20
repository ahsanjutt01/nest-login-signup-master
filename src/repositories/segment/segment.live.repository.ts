import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Segment from 'src/entities/segment';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { SegmentRepositoryInterface } from './segment.reposiory.interface';

@Injectable()
export class SegmentLiveRepository
  extends BaseAbstractRepository<Segment>
  implements SegmentRepositoryInterface
{
  constructor(
    @InjectRepository(Segment, 'shahi')
    public readonly segmentLiveRepository: Repository<Segment>,
  ) {
    super(segmentLiveRepository);
  }
}
