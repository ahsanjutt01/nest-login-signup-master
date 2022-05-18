import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import PosMaterialItem from 'src/entities/posMaterialItem';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { PosMaterialItemRepositoryInterface } from './posMaterialItem.reposiory.interface';

@Injectable()
export class PosMaterialItemLiveRepository
  extends BaseAbstractRepository<PosMaterialItem>
  implements PosMaterialItemRepositoryInterface
{
  constructor(
    @InjectRepository(PosMaterialItem, 'shahi')
    public readonly posMaterialItemLiveRepository: Repository<PosMaterialItem>,
  ) {
    super(posMaterialItemLiveRepository);
  }
}
