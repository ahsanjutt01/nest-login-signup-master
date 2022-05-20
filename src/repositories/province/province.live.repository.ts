import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Province from 'src/entities/province';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { ProvinceRepositoryInterface } from './province.reposiory.interface';

@Injectable()
export class ProvinceLiveRepository
  extends BaseAbstractRepository<Province>
  implements ProvinceRepositoryInterface
{
  constructor(
    @InjectRepository(Province, 'shahi')
    public readonly provinceLiveRepository: Repository<Province>,
  ) {
    super(provinceLiveRepository);
  }
}
