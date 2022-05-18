import { Inject, Injectable } from '@nestjs/common';
import RegionAssignment from 'src/entities/regionAssignment';
import { RegionAssignmentRepositoryInterface } from 'src/repositories/region-assignment/regionAssignment.reposiory.interface';

@Injectable()
export class RegionAssignmentService {
  constructor(
    @Inject('RegionAssignmentRepositoryInterface')
    private readonly repo: RegionAssignmentRepositoryInterface,
  ) {}

  async findAll(): Promise<RegionAssignment[]> {
    const data = await this.repo.findAll();
    return data;
  }
}
