import { Module } from '@nestjs/common';
import { getConnectionToken, TypeOrmModule } from '@nestjs/typeorm';
import Connection from 'mysql2/typings/mysql/lib/Connection';
import { OrderContentController } from 'src/controllers/order-content/order-content.controller';
import entities from 'src/entities/exportedEntities';
import OrderContent from 'src/entities/orderContent';
import OrderContentService from 'src/services/shahi/order-content/order-content.service';

@Module({
  imports: [TypeOrmModule.forFeature(entities, 'shahi')],
  providers: [OrderContentService],
  // providers: [{
  //   provide: OrderContentService,
  //   useFactory: (shahiCon: Connection) => {
  //     return new OrderContentService(shahiCon);
  //   },
  //   inject: [getConnectionToken('shahi')]
  // }],
  controllers: [OrderContentController],
  // exports: [OrderContentService],
})
export default class OrderModule {}
