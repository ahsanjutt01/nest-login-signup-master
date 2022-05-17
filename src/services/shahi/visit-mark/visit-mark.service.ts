import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import VisitsMark from 'src/entities/visitsMarked';
import { Repository } from 'typeorm';

@Injectable()
export class VisitMarkService {
  constructor(
    @InjectRepository(VisitsMark, process.env.DATABASE_LIVE_CONNECTION_NAME)
    private readonly repo: Repository<VisitsMark>,
  ) {}

  async getAll(): Promise<VisitsMark[]> {
    const data = await this.repo.find();
    return data;
  }
}
