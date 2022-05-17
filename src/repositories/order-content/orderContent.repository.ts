import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import OrderContent from 'src/entities/orderContent';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { OrderContentRepositoryInterface } from './orderContent.reposiory.interface';

@Injectable()
export class OrderContentRepository
  extends BaseAbstractRepository<OrderContent>
  implements OrderContentRepositoryInterface
{
  constructor(
    @InjectRepository(OrderContent)
    private readonly orderContentRepository: Repository<OrderContent>,
  ) {
    super(orderContentRepository);
  }
}
