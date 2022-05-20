import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Province from 'src/entities/province';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { ProvinceRepositoryInterface } from './province.reposiory.interface';

@Injectable()
export class ProvinceRepository
  extends BaseAbstractRepository<Province>
  implements ProvinceRepositoryInterface
{
  constructor(
    @InjectRepository(Province)
    private readonly provinceRepository: Repository<Province>,
  ) {
    super(provinceRepository);
  }
}
