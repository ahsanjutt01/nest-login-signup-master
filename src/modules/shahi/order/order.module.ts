import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from 'src/entities/exportedEntities';
import OrderContentService from 'src/services/shahi/order-content/order-content.service';
import { OrderService } from 'src/services/shahi/order/order.service';
import { RetailerDetailService } from 'src/services/shahi/retailer-detail/retailer-detail.service';
import { RouteAssignmentService } from 'src/services/shahi/route-assignment/route-assignment.service';
import { VisitMarkService } from 'src/services/shahi/visit-mark/visit-mark.service';

@Module({
  imports: [TypeOrmModule.forFeature(entities, 'shahi')],
  providers: [
    OrderContentService,
    OrderService,
    VisitMarkService,
    RetailerDetailService,
    RouteAssignmentService,
  ],
  exports: [
    OrderContentService,
    OrderService,
    VisitMarkService,
    RetailerDetailService,
    RouteAssignmentService,
  ],
})
export default class OrderModule {}
