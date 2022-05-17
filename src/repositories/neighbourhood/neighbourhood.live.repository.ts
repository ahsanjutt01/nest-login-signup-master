import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Neighbourhood from 'src/entities/neighbourhood';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { NeighbourhoodRepositoryInterface } from './neighbourhood.reposiory.interface';

@Injectable()
export class NeighbourhoodLiveRepository
  extends BaseAbstractRepository<Neighbourhood>
  implements NeighbourhoodRepositoryInterface
{
  constructor(
    @InjectRepository(Neighbourhood, process.env.DATABASE_LIVE_CONNECTION_NAME)
    private readonly neighbourhoodLiveRepository: Repository<Neighbourhood>,
  ) {
    super(neighbourhoodLiveRepository);
  }
}
