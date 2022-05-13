import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import OrderContent from 'src/entities/orderContent';
import { Repository } from 'typeorm/repository/Repository';
import { OrderService } from './shahi/order/order.service';
import Order from 'src/entities/Order';
import { VisitMarkService } from './shahi/visit-mark/visit-mark.service';
import VisitsMark from 'src/entities/visitsMarked';
import RetailersDetail from 'src/entities/retailersDetail';
import { RetailerDetailService } from './shahi/retailer-detail/retailer-detail.service';
import RouteAssignment from 'src/entities/routeAssignment';
import { RouteAssignmentService } from './shahi/route-assignment/route-assignment.service';
import { EmployeeInfoService } from './shahi/employee-info/employee-info.service';
import EmployeesInfo from 'src/entities/EmployeesInfo';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly repo: Repository<Order>,
    private readonly shahiOrderService: OrderService,
    private readonly shahiVisitMarkService: VisitMarkService,
    private readonly shahiRetailerDetailService: RetailerDetailService,
    private readonly shahiRouteAssignmentService: RouteAssignmentService,
    private readonly shahiEmployeeInfoService: EmployeeInfoService,
    @InjectRepository(VisitsMark)
    private readonly repoVisitMark: Repository<VisitsMark>,
    @InjectRepository(RetailersDetail)
    private readonly retailersDetailRepo: Repository<RetailersDetail>,
    @InjectRepository(RouteAssignment)
    private readonly RouteAssignmentRepo: Repository<RouteAssignment>,

    @InjectRepository(EmployeesInfo)
    private readonly EmployeesInfoRepo: Repository<EmployeesInfo>,
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

  async getVisitMarked(): Promise<VisitsMark[]> {
    const data = await this.shahiVisitMarkService.getAll();
    console.log(data.length);
    const length = data.length;
    const chunkSize = 1000;
    console.log('save starts ', new Date());
    // const save = await this.repoVisitMark.insert({ ...data[1] });
    // console.log('save ', save);

    for (let i = 0; i < length; i += chunkSize) {
      const chunks = data.slice(i, i + chunkSize);
      await this.repoVisitMark.save(chunks);
    }
    console.log('save ends ', new Date());
    return null;
  }

  async migrateRetailerDetail(): Promise<RetailersDetail[]> {
    const data = await this.shahiRetailerDetailService.getAll();
    console.log(data.length);
    const length = data.length;
    const chunkSize = 1000;
    console.log('save starts ', new Date());

    for (let i = 0; i < length; i += chunkSize) {
      const chunks = data.slice(i, i + chunkSize);
      await this.retailersDetailRepo.save(chunks);
    }
    console.log('save ends ', new Date());
    return null;
  }

  async migrateRouteAssignment(): Promise<RetailersDetail[]> {
    const data = await this.shahiRouteAssignmentService.getAll();
    console.log(data.length);
    const length = data.length;
    const chunkSize = 1000;
    console.log('save starts ', new Date());

    for (let i = 0; i < length; i += chunkSize) {
      const chunks = data.slice(i, i + chunkSize);
      await this.RouteAssignmentRepo.save(chunks);
    }
    console.log('save ends ', new Date());
    return null;
  }

  async migrateEmployeeInfo(): Promise<RetailersDetail[]> {
    const data = await this.shahiEmployeeInfoService.getAll();
    console.log(data.length);
    const length = data.length;
    const chunkSize = 1000;
    console.log('save starts ', new Date());

    for (let i = 0; i < length; i += chunkSize) {
      const chunks = data.slice(i, i + chunkSize);
      await this.EmployeesInfoRepo.save(chunks);
    }
    console.log('save ends ', new Date());
    return null;
  }
}
