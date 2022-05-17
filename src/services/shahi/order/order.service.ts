import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Order from 'src/entities/Order';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order, process.env.DATABASE_LIVE_CONNECTION_NAME)
    private readonly repo: Repository<Order>,
  ) {}

  async findAll(): Promise<Order[]> {
    console.log('start => ', new Date());
    const data = await this.repo.find({
      where: {
        status: 'Completed',
      },
      take: 2,
      relations: ['orderContents', 'bookedOrderContents'],
    });
    console.log('end ss=> ', new Date());
    return data;
  }
}
