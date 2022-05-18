import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import RegionsInfo from 'src/entities/regionsInfo';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { RegionsInfoRepositoryInterface } from './regionInfo.reposiory.interface';

@Injectable()
export class RegionsInfoRepository
  extends BaseAbstractRepository<RegionsInfo>
  implements RegionsInfoRepositoryInterface
{
  constructor(
    @InjectRepository(RegionsInfo)
    private readonly regionsInfoRepository: Repository<RegionsInfo>,
  ) {
    super(regionsInfoRepository);
  }
}
