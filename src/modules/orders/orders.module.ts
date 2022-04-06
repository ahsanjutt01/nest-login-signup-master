import { SpacesService } from './../../services/spaces.service';
import { OrdersEntity } from './../../entities/OrdersEntity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersController } from './../../controllers/orders/orders.controller';
import { OrdersService } from 'src/services/orders.service';
import { Module } from '@nestjs/common';

@Module({
    imports: [
        TypeOrmModule.forFeature([OrdersEntity])
    ],
    providers: [OrdersService, SpacesService],
    controllers: [OrdersController],
})
export class OrdersModule { }
