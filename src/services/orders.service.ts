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
import DistributorReturnedProduct from 'src/entities/distributorReturnedProduct';
import { DistributorReturnedProductService } from './shahi/distributor-returned-product/distributor-returned-product.service';
import { InventoryPreferenceService } from './shahi/inventory-preference/inventory-preference.service';
import InventoryPreference from 'src/entities/inventoryPreference';
import SpecialDiscount from 'src/entities/specialDiscount';
import { SpecialDiscountService } from './shahi/special-discount/special-discount.service';
import { NeighbourhoodService } from './shahi/neighbourhood/neighbourhood.service';
import Neighbourhood from 'src/entities/neighbourhood';
import InventoryTypesUnits from 'src/entities/inventoryTypesUnit';
import { InventoryTypesUnitsService } from './shahi/inventory-types-units/inventory-types-units.service';
import { BrandsService } from './shahi/brands/brands.service';
import Brand from 'src/entities/brand';
import { RetailerTypeService } from './shahi/retailer-type/retailer-type.service';
import RetailerType from 'src/entities/retailerType';
import { StockMangementService } from './shahi/stock-mangement/stock-mangement.service';
import StockMangement from 'src/entities/stockManagement';

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
    private readonly shahiDistributorReturnedProductService: DistributorReturnedProductService,
    private readonly shahiInventoryPreferenceService: InventoryPreferenceService,
    private readonly shahiNeighbourhoodService: NeighbourhoodService,
    private readonly shahiInventoryTypesUnitsService: InventoryTypesUnitsService,
    private readonly shahiBrandService: BrandsService,
    private readonly shahiRetailerTypeService: RetailerTypeService,
    private readonly shahiStockMangementService: StockMangementService,

    private readonly shahiSpecialDiscountService: SpecialDiscountService,
    @InjectRepository(VisitsMark)
    private readonly repoVisitMark: Repository<VisitsMark>,
    @InjectRepository(RetailersDetail)
    private readonly retailersDetailRepo: Repository<RetailersDetail>,
    @InjectRepository(RouteAssignment)
    private readonly RouteAssignmentRepo: Repository<RouteAssignment>,
    @InjectRepository(InventoryTypesUnits)
    private readonly InventoryTypesUnitsRepo: Repository<InventoryTypesUnits>,

    @InjectRepository(EmployeesInfo)
    private readonly EmployeesInfoRepo: Repository<EmployeesInfo>,
    @InjectRepository(DistributorReturnedProduct)
    private readonly DistributorReturnedProductRepo: Repository<DistributorReturnedProduct>,
    @InjectRepository(InventoryPreference)
    private readonly InventoryPreferenceRepo: Repository<InventoryPreference>,
    @InjectRepository(SpecialDiscount)
    private readonly SpecialDiscountRepo: Repository<SpecialDiscount>,
    @InjectRepository(Neighbourhood)
    private readonly NeighbourhoodRepo: Repository<Neighbourhood>,
    @InjectRepository(Brand)
    private readonly BrandRepo: Repository<Brand>,
    @InjectRepository(RetailerType)
    private readonly RetailerTypeRepo: Repository<RetailerType>,

    @InjectRepository(StockMangement)
    private readonly StockMangementRepo: Repository<StockMangement>,
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

  async migrateDistributorReturnedProduct(): Promise<RetailersDetail[]> {
    const data = await this.shahiDistributorReturnedProductService.getAll();
    console.log(data.length);
    const length = data.length;
    const chunkSize = 1000;
    console.log('save starts ', new Date());

    for (let i = 0; i < length; i += chunkSize) {
      const chunks = data.slice(i, i + chunkSize);
      await this.DistributorReturnedProductRepo.save(chunks);
    }
    console.log('save ends ', new Date());
    return null;
  }

  async migrateInventoryPreference(): Promise<InventoryPreference[]> {
    const data = await this.shahiInventoryPreferenceService.getAll();
    console.log(data.length);
    const length = data.length;
    const chunkSize = 1000;
    console.log('save starts ', new Date());

    for (let i = 0; i < length; i += chunkSize) {
      const chunks = data.slice(i, i + chunkSize);
      await this.InventoryPreferenceRepo.save(chunks);
    }
    console.log('save ends ', new Date());
    return null;
  }

  async migrateSpecialDiscount(): Promise<SpecialDiscount[]> {
    const data = await this.shahiSpecialDiscountService.getAll();
    console.log(data.length);
    const length = data.length;
    const chunkSize = 1000;
    console.log('save starts ', new Date());

    for (let i = 0; i < length; i += chunkSize) {
      const chunks = data.slice(i, i + chunkSize);
      await this.SpecialDiscountRepo.save(chunks);
    }
    console.log('save ends ', new Date());
    return null;
  }

  async migrateNeighbourhood(): Promise<Neighbourhood[]> {
    const data = await this.shahiNeighbourhoodService.getAll();
    console.log(data.length);
    const length = data.length;
    const chunkSize = 1000;
    console.log('save starts ', new Date());

    for (let i = 0; i < length; i += chunkSize) {
      const chunks = data.slice(i, i + chunkSize);
      await this.NeighbourhoodRepo.save(chunks);
    }
    console.log('save ends ', new Date());
    return null;
  }

  async migrateInventoryTypesUnits(): Promise<InventoryTypesUnits[]> {
    const data = await this.shahiInventoryTypesUnitsService.getAll();
    console.log(data.length);
    const length = data.length;
    const chunkSize = 1000;
    console.log('save starts ', new Date());

    for (let i = 0; i < length; i += chunkSize) {
      const chunks = data.slice(i, i + chunkSize);
      await this.InventoryTypesUnitsRepo.save(chunks);
    }
    console.log('save ends ', new Date());
    return null;
  }
  async migrateBrands(): Promise<Brand[]> {
    const data = await this.shahiBrandService.getAll();
    console.log(data.length);
    const length = data.length;
    const chunkSize = 1000;
    console.log('save starts ', new Date());

    for (let i = 0; i < length; i += chunkSize) {
      const chunks = data.slice(i, i + chunkSize);
      await this.BrandRepo.save(chunks);
    }
    console.log('save ends ', new Date());
    return null;
  }
  async migrateRetailerType(): Promise<RetailerType[]> {
    const data = await this.shahiRetailerTypeService.getAll();
    console.log(data.length);
    const length = data.length;
    const chunkSize = 1000;
    console.log('save starts ', new Date());

    for (let i = 0; i < length; i += chunkSize) {
      const chunks = data.slice(i, i + chunkSize);
      await this.RetailerTypeRepo.save(chunks);
    }
    console.log('save ends ', new Date());
    return null;
  }

  async migrateStockMangement(): Promise<StockMangement[]> {
    const data = await this.shahiStockMangementService.getAll();
    console.log(data.length);
    const length = data.length;
    const chunkSize = 1000;
    console.log('save starts ', new Date());

    for (let i = 0; i < length; i += chunkSize) {
      const chunks = data.slice(i, i + chunkSize);
      await this.StockMangementRepo.save(chunks);
    }
    console.log('save ends ', new Date());
    return null;
  }
}
