import { Inject, Injectable } from '@nestjs/common';
import SubCategory from 'src/entities/subCategory';
import { SubCategoryRepositoryInterface } from 'src/repositories/sub-category/subCategory.reposiory.interface';

@Injectable()
export class SubCategoryService {
  constructor(
    @Inject('SubCategoryRepositoryInterface')
    private readonly repo: SubCategoryRepositoryInterface,
  ) {}

  async findAll(): Promise<SubCategory[]> {
    const data = await this.repo.findAll();
    return data;
  }
}
