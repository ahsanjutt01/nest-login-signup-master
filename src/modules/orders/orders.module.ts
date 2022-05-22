import entities from './../../entities/exportedEntities';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersController } from './../../controllers/orders/orders.controller';
import { Module } from '@nestjs/common';
import OrderModule from '../shahi/order/order.module';
import { Provider } from './provider';
import { OrdersService } from 'src/services/orders.service';
@Module({
  imports: [TypeOrmModule.forFeature(entities), OrderModule],
  providers: Provider,
  controllers: [OrdersController],
  exports: [OrdersService],
})
export class OrdersModule {}
