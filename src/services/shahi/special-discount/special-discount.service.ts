import { Inject, Injectable } from '@nestjs/common';
import SpecialDiscount from 'src/entities/specialDiscount';
import { SpecialDiscountRepositoryInterface } from 'src/repositories/special-discount/specialDiscount.reposiory.interface';

@Injectable()
export class SpecialDiscountService {
  constructor(
    @Inject('SpecialDiscountRepositoryInterface')
    private readonly repo: SpecialDiscountRepositoryInterface,
  ) {}

  async findAll(): Promise<SpecialDiscount[]> {
    const data = await this.repo.findAll();
    return data;
  }
}
