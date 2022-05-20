import { Inject, Injectable } from '@nestjs/common';
import DistributorsAssignment from 'src/entities/distributorsAssignment';
import { DistributorsAssignmentRepositoryInterface } from 'src/repositories/distributor-assignment/distributorAssignment.reposiory.interface';

@Injectable()
export class DistributorAssignmentService {
  constructor(
    @Inject('DistributorsAssignmentRepositoryInterface')
    private readonly repo: DistributorsAssignmentRepositoryInterface,
  ) {}

  async findAll(): Promise<DistributorsAssignment[]> {
    const data = await this.repo.findAll();
    return data;
  }
}
