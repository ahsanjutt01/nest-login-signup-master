import entities from './../../entities/exportedEntities';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersController } from './../../controllers/orders/orders.controller';
import { Module } from '@nestjs/common';
import OrderModule from '../shahi/order/order.module';
import { Provider } from './provider';

@Module({
  imports: [TypeOrmModule.forFeature(entities), OrderModule],
  providers: Provider,
  controllers: [OrdersController],
})
export class OrdersModule {}
