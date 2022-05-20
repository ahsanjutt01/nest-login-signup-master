import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Scheme from 'src/entities/scheme';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { SchemeRepositoryInterface } from './scheme.reposiory.interface';

@Injectable()
export class SchemeRepository
  extends BaseAbstractRepository<Scheme>
  implements SchemeRepositoryInterface
{
  constructor(
    @InjectRepository(Scheme)
    private readonly schemeRepository: Repository<Scheme>,
  ) {
    super(schemeRepository);
  }
}
