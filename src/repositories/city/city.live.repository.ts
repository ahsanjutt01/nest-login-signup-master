import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import City from 'src/entities/city';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { CityRepositoryInterface } from './city.reposiory.interface';

@Injectable()
export class CityLiveRepository
  extends BaseAbstractRepository<City>
  implements CityRepositoryInterface
{
  constructor(
    @InjectRepository(City, 'shahi')
    public readonly cityLiveRepository: Repository<City>,
  ) {
    super(cityLiveRepository);
  }
}
