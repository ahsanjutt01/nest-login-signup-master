import { Inject, Injectable } from '@nestjs/common';
import Order from 'src/entities/Order';
import { OrderRepositoryInterface } from 'src/repositories/order/order.reposiory.interface';

@Injectable()
export class OrderService {
  constructor(
    @Inject('OrderRepositoryInterface')
    private readonly repo: OrderRepositoryInterface,
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
