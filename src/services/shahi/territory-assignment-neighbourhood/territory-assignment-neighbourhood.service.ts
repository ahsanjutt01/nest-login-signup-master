import { Inject, Injectable } from '@nestjs/common';
import TerritoryAssignmentNeighbourhood from 'src/entities/territoryAssignmentNeighbourhood';
import { TerritoryAssignmentNeighbourhoodRepositoryInterface } from 'src/repositories/territory-assignment-neighbourhood/territory-assignment-neighbourhood.reposiory.interface';

@Injectable()
export class TerritoryAssignmentNeighbourhoodService {
  constructor(
    @Inject('TerritoryAssignmentNeighbourhoodRepositoryInterface')
    private readonly repo: TerritoryAssignmentNeighbourhoodRepositoryInterface,
  ) {}

  async findAll(): Promise<TerritoryAssignmentNeighbourhood[]> {
    const data = await this.repo.findAll();
    return data;
  }
}
