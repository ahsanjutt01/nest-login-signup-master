import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import RegionsInfo from 'src/entities/regionsInfo';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { RegionsInfoRepositoryInterface } from './regionInfo.reposiory.interface';

@Injectable()
export class RegionsInfoLiveRepository
  extends BaseAbstractRepository<RegionsInfo>
  implements RegionsInfoRepositoryInterface
{
  constructor(
    @InjectRepository(RegionsInfo, 'shahi')
    public readonly regionsInfoLiveRepository: Repository<RegionsInfo>,
  ) {
    super(regionsInfoLiveRepository);
  }
}
