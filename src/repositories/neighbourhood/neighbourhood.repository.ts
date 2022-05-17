import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Neighbourhood from 'src/entities/neighbourhood';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { NeighbourhoodRepositoryInterface } from './neighbourhood.reposiory.interface';

@Injectable()
export class NeighbourhoodRepository
  extends BaseAbstractRepository<Neighbourhood>
  implements NeighbourhoodRepositoryInterface
{
  constructor(
    @InjectRepository(Neighbourhood)
    private readonly neighbourhoodRepository: Repository<Neighbourhood>,
  ) {
    super(neighbourhoodRepository);
  }
}
