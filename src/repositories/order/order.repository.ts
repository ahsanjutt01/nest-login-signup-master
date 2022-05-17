import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Order from 'src/entities/Order';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { OrderRepositoryInterface } from './order.reposiory.interface';

@Injectable()
export class OrderRepository
  extends BaseAbstractRepository<Order>
  implements OrderRepositoryInterface
{
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {
    super(orderRepository);
  }
}
