import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import VisitsMark from 'src/entities/visitsMarked';
import { VisitsMarkRepositoryInterface } from 'src/repositories/visit-mark/visitMark.reposiory.interface';
import { Repository } from 'typeorm';

@Injectable()
export class VisitMarkService {
  constructor(
    @Inject('VisitsMarkRepositoryInterface')
    private readonly repo: VisitsMarkRepositoryInterface,
  ) {}

  async findAll(): Promise<VisitsMark[]> {
    const data = await this.repo.findAll();
    return data;
  }
}
