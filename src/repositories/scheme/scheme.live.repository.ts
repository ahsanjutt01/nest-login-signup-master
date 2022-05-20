import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Scheme from 'src/entities/scheme';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { SchemeRepositoryInterface } from './scheme.reposiory.interface';

@Injectable()
export class SchemeLiveRepository
  extends BaseAbstractRepository<Scheme>
  implements SchemeRepositoryInterface
{
  constructor(
    @InjectRepository(Scheme, 'shahi')
    public readonly schemeLiveRepository: Repository<Scheme>,
  ) {
    super(schemeLiveRepository);
  }
}
