import { Inject, Injectable } from '@nestjs/common';
import AreaAssignment from 'src/entities/areaAssignment';
import { AreaAssignmentRepositoryInterface } from 'src/repositories/area-assignment/areaAssignment.reposiory.interface';

@Injectable()
export class AreaAssignmentService {
  constructor(
    @Inject('AreaAssignmentRepositoryInterface')
    private readonly repo: AreaAssignmentRepositoryInterface,
  ) {}

  async findAll(): Promise<AreaAssignment[]> {
    const data = await this.repo.findAll();
    return data;
  }
}
