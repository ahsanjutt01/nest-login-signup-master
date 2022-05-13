import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from 'src/entities/exportedEntities';
import OrderContentService from 'src/services/shahi/order-content/order-content.service';
import { OrderService } from 'src/services/shahi/order/order.service';

@Module({
  imports: [TypeOrmModule.forFeature(entities, 'shahi')],
  providers: [OrderContentService, OrderService],
  exports: [OrderContentService, OrderService],
})
export default class OrderModule {}
