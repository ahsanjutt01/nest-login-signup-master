import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import OrderContent from 'src/entities/orderContent';

@Injectable()
export default class OrderContentService {
  constructor(
    // @InjectConnection('shahi')
    @InjectRepository(OrderContent, 'shahi')
    private readonly repo: Repository<OrderContent>,
  ) {}

  async findAll(): Promise<OrderContent[]> {
    // console.log('this.repo => ', this.repo);
    const data = await this.repo.find({
      take: 10,
    });
    // console.log('this.repo => ', data);
    return data;
  }
}
