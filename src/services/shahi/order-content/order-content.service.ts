import { Inject, Injectable } from '@nestjs/common';
import OrderContent from 'src/entities/orderContent';
import { OrderContentRepositoryInterface } from 'src/repositories/order-content/orderContent.reposiory.interface';

@Injectable()
export default class OrderContentService {
  constructor(
    @Inject('OrderContentRepositoryInterface')
    private readonly repo: OrderContentRepositoryInterface,
  ) {}

  async findAll(): Promise<OrderContent[]> {
    // console.log('this.repo => ', this.repo);
    console.log('start => ', new Date());
    const data = await this.repo.findAll();
    console.log('end ss=> ', new Date());
    return data;
  }
}
