import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import SubCategory from 'src/entities/subCategory';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { SubCategoryRepositoryInterface } from './subCategory.reposiory.interface';

@Injectable()
export class SubCategoryLiveRepository
  extends BaseAbstractRepository<SubCategory>
  implements SubCategoryRepositoryInterface
{
  constructor(
    @InjectRepository(SubCategory, 'shahi')
    public readonly subCategoryLiveRepository: Repository<SubCategory>,
  ) {
    super(subCategoryLiveRepository);
  }
}
