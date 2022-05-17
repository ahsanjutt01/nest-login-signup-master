import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Ams from 'src/entities/ams';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../base/base.abstract.repository';
import { AmsRepositoryInterface } from './ams.reposiory.interface';

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
