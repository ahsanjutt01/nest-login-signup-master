import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import OrderBookersTarget from 'src/entities/orderBookersTarget';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { OrderBookersTargetRepositoryInterface } from './oderBookerTarget.reposiory.interface';

@Injectable()
export class OrderBookersTargetLiveRepository
  extends BaseAbstractRepository<OrderBookersTarget>
  implements OrderBookersTargetRepositoryInterface
{
  constructor(
    @InjectRepository(OrderBookersTarget, 'shahi')
    public readonly orderBookersTargetLiveRepository: Repository<OrderBookersTarget>,
  ) {
    super(orderBookersTargetLiveRepository);
  }
}
