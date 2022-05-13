import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from 'src/entities/exportedEntities';
import { EmployeeInfoService } from 'src/services/shahi/employee-info/employee-info.service';
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
    EmployeeInfoService,
  ],
  exports: [
    OrderContentService,
    OrderService,
    VisitMarkService,
    RetailerDetailService,
    RouteAssignmentService,
    EmployeeInfoService,
  ],
})
export default class OrderModule {}
