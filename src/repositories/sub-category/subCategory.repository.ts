import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import SubCategory from 'src/entities/subCategory';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { SubCategoryRepositoryInterface } from './subCategory.reposiory.interface';

@Injectable()
export class SubCategoryRepository
  extends BaseAbstractRepository<SubCategory>
  implements SubCategoryRepositoryInterface
{
  constructor(
    @InjectRepository(SubCategory)
    private readonly subCategoryRepository: Repository<SubCategory>,
  ) {
    super(subCategoryRepository);
  }
}
