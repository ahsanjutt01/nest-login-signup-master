import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import OrderContent from 'src/entities/orderContent';
import { Repository } from 'typeorm/repository/Repository';
import OrderContentService from './shahi/order-content/order-content.service';
import { getConnection } from 'typeorm';
import { OrderService } from './shahi/order/order.service';
import Order from 'src/entities/Order';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly repo: Repository<Order>,
    private readonly shahiOrderContentService: OrderContentService,
    private readonly shahiOrderService: OrderService,
  ) {}
  async getOrders(): Promise<OrderContent[]> {
    // console.log('getOrders =>');
    // const data = await this.shahiOrderContentService.findAll();
    // console.log('getOrders =>', data.length);
    // console.log('insertion start => ', new Date());
    // await this.repo.insert(data);

    // const length = data.length;
    // const chunkSize = 1000;
    // for (let i = 0; i < length; i += chunkSize) {
    //   const chunks = data.slice(i, i + chunkSize);
    //   const inserted = await this.repo.insert(chunks);
    // }
    // .createQueryBuilder()
    // .insert()
    // .into(OrderContent)
    // .values([...data])
    // .execute();
    // console.log('sss => ', inserted);
    // console.log('inserted => ', new Date());
    // const newDbData = await this.repo.find();
    // console.log('newDbData => ', newDbData.length);

    return null;
  }

  async getAllOrders(): Promise<Order[]> {
    const data = await this.shahiOrderService.findAll();
    // console.log(data[0]);
    const length = data.length;
    const chunkSize = 500;
    console.log('save starts ', new Date());

    for (let i = 0; i < length; i += chunkSize) {
      const chunks = data.slice(i, i + chunkSize);
      const inserted = await this.repo.save(chunks);
    }
    console.log('save ends ', new Date());

    // console.log('data => ', data.length);
    // console.log('save starts');
    // const save = await this.repo.save(data);
    // console.log('save ends', save);

    return null;
  }
}
