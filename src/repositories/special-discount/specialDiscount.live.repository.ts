import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import SpecialDiscount from 'src/entities/specialDiscount';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { SpecialDiscountRepositoryInterface } from './specialDiscount.reposiory.interface';

@Injectable()
export class SpecialDiscountLiveRepository
  extends BaseAbstractRepository<SpecialDiscount>
  implements SpecialDiscountRepositoryInterface
{
  constructor(
    @InjectRepository(SpecialDiscount, 'shahi')
    private readonly specialDiscountLiveRepository: Repository<SpecialDiscount>,
  ) {
    super(specialDiscountLiveRepository);
  }
}
