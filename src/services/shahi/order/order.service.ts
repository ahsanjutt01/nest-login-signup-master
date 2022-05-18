import { Inject, Injectable } from '@nestjs/common';
import Order from 'src/entities/Order';
import { OrderLiveRepository } from 'src/repositories/order/order.live.repository';

@Injectable()
export class OrderService {
  constructor(
    @Inject('OrderRepositoryInterface')
    private readonly repo: OrderLiveRepository,
  ) {}

  async findByConditionWithRelations(): Promise<Order[]> {
    console.log('start => ', new Date());
    const data = await this.repo.findByConditionWithRelations(
      {
        status: 'Completed',
      },
      ['orderContents', 'bookedOrderContents'],
    );
    console.log('end ss=> ', new Date());
    return data;
  }
}
