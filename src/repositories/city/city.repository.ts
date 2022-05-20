import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import City from 'src/entities/city';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { CityRepositoryInterface } from './city.reposiory.interface';

@Injectable()
export class CityRepository
  extends BaseAbstractRepository<City>
  implements CityRepositoryInterface
{
  constructor(
    @InjectRepository(City)
    private readonly cityRepository: Repository<City>,
  ) {
    super(cityRepository);
  }
}
