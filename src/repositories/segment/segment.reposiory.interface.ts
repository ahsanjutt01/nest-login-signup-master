import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import Segment from 'src/entities/segment';

export interface SegmentRepositoryInterface
  extends BaseAbstractRepository<Segment> {}
