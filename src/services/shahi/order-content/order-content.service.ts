import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import OrderContent from 'src/entities/orderContent';

@Injectable()
export default class OrderContentService {
  constructor(
    @InjectRepository(OrderContent, 'shahi')
    private readonly repo: Repository<OrderContent>,
  ) {}

  async findAll(): Promise<OrderContent[]> {
    // console.log('this.repo => ', this.repo);
    console.log('start => ', new Date());
    const data = await this.repo
      .find
      // {
      // take: 5000,
      // }
      ();
    console.log('end ss=> ', new Date());
    return data;
  }
}
