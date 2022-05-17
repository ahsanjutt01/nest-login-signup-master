import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Order from 'src/entities/Order';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { OrderRepositoryInterface } from './order.reposiory.interface';

@Injectable()
export class OrderLiveRepository
  extends BaseAbstractRepository<Order>
  implements OrderRepositoryInterface
{
  constructor(
    @InjectRepository(Order, process.env.DATABASE_LIVE_CONNECTION_NAME)
    private readonly orderLiveRepository: Repository<Order>,
  ) {
    super(orderLiveRepository);
  }
}
