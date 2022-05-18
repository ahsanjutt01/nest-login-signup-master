import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import TerritoryAssignmentNeighbourhood from 'src/entities/territoryAssignmentNeighbourhood';
import { TerritoryAssignmentNeighbourhoodRepositoryInterface } from './territory-assignment-neighbourhood.reposiory.interface';

@Injectable()
export class TerritoryAssignmentNeighbourhoodLiveRepository
  extends BaseAbstractRepository<TerritoryAssignmentNeighbourhood>
  implements TerritoryAssignmentNeighbourhoodRepositoryInterface
{
  constructor(
    @InjectRepository(TerritoryAssignmentNeighbourhood, 'shahi')
    public readonly territoryAssignmentNeighbourhoodLiveRepository: Repository<TerritoryAssignmentNeighbourhood>,
  ) {
    super(territoryAssignmentNeighbourhoodLiveRepository);
  }
}
