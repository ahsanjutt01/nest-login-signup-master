import { Inject, Injectable } from '@nestjs/common';
import PosMaterialItem from 'src/entities/posMaterialItem';
import { PosMaterialItemRepositoryInterface } from 'src/repositories/pos-material-item/posMaterialItem.reposiory.interface';

@Injectable()
export class PosMaterialItemService {
  constructor(
    @Inject('PosMaterialItemRepositoryInterface')
    private readonly repo: PosMaterialItemRepositoryInterface,
  ) {}

  async findAll(): Promise<PosMaterialItem[]> {
    const data = await this.repo.findAll();
    return data;
  }
}
