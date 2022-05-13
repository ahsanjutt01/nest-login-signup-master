import { SpacesService } from './../../services/spaces.service';
import entities from './../../entities/exportedEntities';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersController } from './../../controllers/orders/orders.controller';
import { OrdersService } from 'src/services/orders.service';
import { Module } from '@nestjs/common';
import OrderModule from '../shahi/order/order.module';

@Module({
  imports: [TypeOrmModule.forFeature(entities), OrderModule],
  providers: [OrdersService, SpacesService],
  controllers: [OrdersController],
})
export class OrdersModule {}
