import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Ams from 'src/entities/ams';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../base/base.abstract.repository';
import { AmsRepositoryInterface } from './ams.reposiory.interface';

@Injectable()
export class AmsRepository
  extends BaseAbstractRepository<Ams>
  implements AmsRepositoryInterface
{
  constructor(
    @InjectRepository(Ams)
    private readonly amsRepository: Repository<Ams>,
  ) {
    super(amsRepository);
  }
}
