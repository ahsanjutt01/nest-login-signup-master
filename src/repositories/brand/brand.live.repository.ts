import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Brand from 'src/entities/brand';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { BrandRepositoryInterface } from './brand.reposiory.interface';

@Injectable()
export class BrandLiveRepository
  extends BaseAbstractRepository<Brand>
  implements BrandRepositoryInterface
{
  constructor(
    @InjectRepository(Brand, 'shahi')
    private readonly brandLiveRepository: Repository<Brand>,
  ) {
    super(brandLiveRepository);
  }
}
