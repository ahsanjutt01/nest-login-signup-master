import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import TerritoryAssignmentNeighbourhood from 'src/entities/territoryAssignmentNeighbourhood';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { TerritoryAssignmentNeighbourhoodRepositoryInterface } from './territory-assignment-neighbourhood.reposiory.interface';

@Injectable()
export class TerritoryAssignmentNeighbourhoodRepository
  extends BaseAbstractRepository<TerritoryAssignmentNeighbourhood>
  implements TerritoryAssignmentNeighbourhoodRepositoryInterface
{
  constructor(
    @InjectRepository(TerritoryAssignmentNeighbourhood)
    private readonly territoryAssignmentNeighbourhoodRepository: Repository<TerritoryAssignmentNeighbourhood>,
  ) {
    super(territoryAssignmentNeighbourhoodRepository);
  }
}
