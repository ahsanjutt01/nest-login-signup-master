import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import PosMaterialRetailer from 'src/entities/posMaterialRetailer';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { PosMaterialRetailerRepositoryInterface } from './posMaterialRetailer.reposiory.interface';

@Injectable()
export class PosMaterialRetailerRepository
  extends BaseAbstractRepository<PosMaterialRetailer>
  implements PosMaterialRetailerRepositoryInterface
{
  constructor(
    @InjectRepository(PosMaterialRetailer)
    private readonly posMaterialRetailerRepository: Repository<PosMaterialRetailer>,
  ) {
    super(posMaterialRetailerRepository);
  }
}
