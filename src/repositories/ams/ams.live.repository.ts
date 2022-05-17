import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { AmsRepositoryInterface } from './ams.reposiory.interface';
import Ams from 'src/entities/ams';

@Injectable()
export class AmsLiveRepository
  extends BaseAbstractRepository<Ams>
  implements AmsRepositoryInterface
{
  constructor(
    @InjectRepository(Ams, process.env.DATABASE_LIVE_CONNECTION_NAME)
    private readonly amsLiveRepository: Repository<Ams>,
  ) {
    super(amsLiveRepository);
  }
}
