import { SpacesService } from './../../services/spaces.service';
import entities from './../../entities/exportedEntities';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersController } from './../../controllers/orders/orders.controller';
import { OrdersService } from 'src/services/orders.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [OrdersService, SpacesService],
  controllers: [OrdersController],
})
export class OrdersModule {}
