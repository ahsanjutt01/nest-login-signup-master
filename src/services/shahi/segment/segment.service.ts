import { Inject, Injectable } from '@nestjs/common';
import Segment from 'src/entities/segment';
import { SegmentRepositoryInterface } from 'src/repositories/segment/segment.reposiory.interface';

@Injectable()
export class SegmentService {
  constructor(
    @Inject('SegmentRepositoryInterface')
    private readonly repo: SegmentRepositoryInterface,
  ) {}

  async findAll(): Promise<Segment[]> {
    const data = await this.repo.findAll();
    return data;
  }
}
