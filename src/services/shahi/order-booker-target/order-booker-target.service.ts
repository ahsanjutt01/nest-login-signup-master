import { Inject, Injectable } from '@nestjs/common';
import OrderBookersTarget from 'src/entities/orderBookersTarget';
import { OrderBookersTargetRepositoryInterface } from 'src/repositories/order-booker-target/oderBookerTarget.reposiory.interface';

@Injectable()
export class OrderBookerTargetService {
  constructor(
    @Inject('OrderBookersTargetRepositoryInterface')
    private readonly repo: OrderBookersTargetRepositoryInterface,
  ) {}

  async findAll(): Promise<OrderBookersTarget[]> {
    const data = await this.repo.findAll();
    return data;
  }
}
