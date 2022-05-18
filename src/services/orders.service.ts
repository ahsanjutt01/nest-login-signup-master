import { Inject, Injectable } from '@nestjs/common';
import OrderContent from 'src/entities/orderContent';
import { OrderService } from './shahi/order/order.service';
import Order from 'src/entities/Order';
import { VisitMarkService } from './shahi/visit-mark/visit-mark.service';
import VisitsMark from 'src/entities/visitsMarked';
import RetailersDetail from 'src/entities/retailersDetail';
import { RetailerDetailService } from './shahi/retailer-detail/retailer-detail.service';
import { RouteAssignmentService } from './shahi/route-assignment/route-assignment.service';
import { EmployeeInfoService } from './shahi/employee-info/employee-info.service';
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
import { PosMaterialRetailersService } from './shahi/pos-material-retailers/pos-material-retailers.service';
import PosMaterialRetailer from 'src/entities/posMaterialRetailer';
import { SimilarityIndexResultService } from './shahi/similarity-index-result/similarity-index-result.service';
import SimilarityIndexResult from 'src/entities/similarityIndexResult';
import { AmsService } from './shahi/ams/ams.service';
import Ams from 'src/entities/ams';
import { AmsRepositoryInterface } from 'src/repositories/ams/ams.reposiory.interface';
import { PosMaterialRetailerRepositoryInterface } from 'src/repositories/pos-material-retailers/posMaterialRetailer.reposiory.interface';
import { SimilarityIndexResultRepository } from 'src/repositories/similarity-index-result/similiarityIndexResult.repository';
import { StockMangementRepository } from 'src/repositories/stock-mangement/stockMangement.repository';
import { RetailerTypeRepository } from 'src/repositories/retailer-type/retailerType.repository';
import { BrandRepository } from 'src/repositories/brand/brand.repository';
import { NeighbourhoodRepository } from 'src/repositories/neighbourhood/neighbourhood.repository';
import { SpecialDiscountRepository } from 'src/repositories/special-discount/specialDiscount.repository';
import { InventoryPrefernceRepository } from 'src/repositories/inventory-preference/inventoryPreference.repository';
import { DistributorReturnedProductRepository } from 'src/repositories/distributor-returned-product/distributorReturnedProduct.repository';
import { EmployeeInfoRepository } from 'src/repositories/employee-info/employeeInfo.repository';
import { InventoryTypesUnitsRepository } from 'src/repositories/inventory-types-units/inventoryTypeUnit.repository';
import { RouteAssignmentRepository } from 'src/repositories/route-assignment/routeAssignment.repository';
import { RetailersDetailRepository } from 'src/repositories/retailer-detail/retaillerDetail.repository';
import { VisitsMarkRepository } from 'src/repositories/visit-mark/visitMark.repository';
import { OrderRepository } from 'src/repositories/order/order.repository';
import { Helper } from 'src/util/helper';
import RouteRetailer from 'src/entities/routeRetailer';
import { RouteRetailerRepositoryInterface } from 'src/repositories/route-retailer/routeRetailer.reposiory.interface';
import { RouteRetailerService } from './shahi/route-retailer/route-retailer.service';
import { OrderBookerTargetService } from './shahi/order-booker-target/order-booker-target.service';
import { OrderBookersTargetRepositoryInterface } from 'src/repositories/order-booker-target/oderBookerTarget.reposiory.interface';
import OrderBookersTarget from 'src/entities/orderBookersTarget';
import { TerritoryAssignmentNeighbourhoodService } from './shahi/territory-assignment-neighbourhood/territory-assignment-neighbourhood.service';
import TerritoryAssignmentNeighbourhood from 'src/entities/territoryAssignmentNeighbourhood';
import { TerritoryAssignmentNeighbourhoodRepositoryInterface } from 'src/repositories/territory-assignment-neighbourhood/territory-assignment-neighbourhood.reposiory.interface';
import { AreaAssignmentLocalityService } from './shahi/area-assignment-locality/area-assignment-locality.service';
import { AreaAssignmentLocalitieRepositoryInterface } from 'src/repositories/area-assignment-locality/areaAssignmentLocality.reposiory.interface';
import AreaAssignmentLocalitie from 'src/entities/areaAssignmentLocalitie';
import { DistributorProductsMarginService } from './shahi/distributor-products-margin/distributor-products-margin.service';
import { DistributorProductsMarginRepositoryInterface } from 'src/repositories/distributor-product-margin/distributorProductMargin.reposiory.interface';
import DistributorProductsMargin from 'src/entities/distributorProductsMargin';

@Injectable()
export class OrdersService {
  constructor(
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
    private readonly shahiPosMaterialRetailersService: PosMaterialRetailersService,
    private readonly shahiSpecialDiscountService: SpecialDiscountService,
    private readonly shahiSimilarityIndexResultService: SimilarityIndexResultService,
    private readonly shahiAmsService: AmsService,
    private readonly shahiRouteRetailerService: RouteRetailerService,
    private readonly shahiOrderBookerTargetService: OrderBookerTargetService,
    private readonly shahiTerritoryAssignmentNeighbourhoodService: TerritoryAssignmentNeighbourhoodService,
    private readonly shahiAreaAssignmentLocalityService: AreaAssignmentLocalityService,
    private readonly shahiDistributorProductsMarginService: DistributorProductsMarginService,

    @Inject('OrderRepositoryInterface')
    private readonly orderRepo: OrderRepository,

    @Inject('VisitsMarkRepositoryInterface')
    private readonly visitMarkRepo: VisitsMarkRepository,

    @Inject('RetailersDetailRepositoryInterface')
    private readonly retailersDetailRepo: RetailersDetailRepository,

    @Inject('RouteAssignmentRepositoryInterface')
    private readonly routeAssignmentRepo: RouteAssignmentRepository,

    @Inject('InventoryTypesUnitRepositoryInterface')
    private readonly inventoryTypesUnitsRepo: InventoryTypesUnitsRepository,

    @Inject('EmployeeInfoRepositoryInterface')
    private readonly employeesInfoRepo: EmployeeInfoRepository,

    @Inject('DistributorReturnedProductRepositoryInterface')
    private readonly distributorReturnedProductRepo: DistributorReturnedProductRepository,

    @Inject('InventoryPreferenceRepositoryInterface')
    private readonly inventoryPreferenceRepo: InventoryPrefernceRepository,

    @Inject('SpecialDiscountRepositoryInterface')
    private readonly specialDiscountRepo: SpecialDiscountRepository,

    @Inject('NeighbourhoodRepositoryInterface')
    private readonly neighbourhoodRepo: NeighbourhoodRepository,

    @Inject('BrandRepositoryInterface')
    private readonly brandRepo: BrandRepository,

    @Inject('RetailerTypeRepositoryInterface')
    private readonly retailerTypeRepo: RetailerTypeRepository,

    @Inject('StockMangementRepositoryInterface')
    private readonly stockMangementRepository: StockMangementRepository,

    @Inject('PosMaterialRetailerRepositoryInterface')
    private readonly posMaterialRetailerRepo: PosMaterialRetailerRepositoryInterface,

    @Inject('SimilarityIndexResultRepositoryInterface')
    private readonly similarityIndexResultRepo: SimilarityIndexResultRepository,

    @Inject('AmsRepositoryInterface')
    private readonly amsRepo: AmsRepositoryInterface,

    @Inject('RouteRetailerRepositoryInterface')
    private readonly routeRetailersRepo: RouteRetailerRepositoryInterface,
    @Inject('OrderBookersTargetRepositoryInterface')
    private readonly orderBookersTargetRepo: OrderBookersTargetRepositoryInterface,
    @Inject('TerritoryAssignmentNeighbourhoodRepositoryInterface')
    private readonly territoryAssignmentNeighbourhoodRepo: TerritoryAssignmentNeighbourhoodRepositoryInterface,
    @Inject('AreaAssignmentLocalitieRepositoryInterface')
    private readonly areaAssignmentLocalitieRepo: AreaAssignmentLocalitieRepositoryInterface,

    @Inject('DistributorProductsMarginRepositoryInterface')
    private readonly distributorProductsMarginRepo: DistributorProductsMarginRepositoryInterface,
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
    const data = await this.shahiOrderService.findByConditionWithRelations();
    // console.log(data[0]);
    const length = data.length;
    const chunkSize = 500;
    console.log('save starts ', new Date());

    for (let i = 0; i < length; i += chunkSize) {
      const chunks = data.slice(i, i + chunkSize);
      const inserted = await this.orderRepo.create(chunks);
    }
    console.log('save ends ', new Date());

    // console.log('data => ', data.length);
    // console.log('save starts');
    // const save = await this.repo.save(data);
    // console.log('save ends', save);

    return null;
  }

  async getVisitMarked(): Promise<VisitsMark[]> {
    const data = await this.shahiVisitMarkService.findAll();
    console.log(data.length);
    const length = data.length;
    const chunkSize = 1000;
    console.log('save starts ', new Date());
    // const save = await this.repoVisitMark.insert({ ...data[1] });
    // console.log('save ', save);

    for (let i = 0; i < length; i += chunkSize) {
      const chunks = data.slice(i, i + chunkSize);
      await this.visitMarkRepo.create(chunks);
    }
    console.log('save ends ', new Date());
    return null;
  }

  async migrateRetailerDetail(): Promise<RetailersDetail[]> {
    const data = await this.shahiRetailerDetailService.findAll();
    console.log(data.length);
    const length = data.length;
    const chunkSize = 1000;
    console.log('save starts ', new Date());

    for (let i = 0; i < length; i += chunkSize) {
      const chunks = data.slice(i, i + chunkSize);
      await this.retailersDetailRepo.create(chunks);
    }
    console.log('save ends ', new Date());
    return null;
  }

  async migrateRouteAssignment(): Promise<RetailersDetail[]> {
    const data = await this.shahiRouteAssignmentService.findAll();
    console.log(data.length);
    const length = data.length;
    const chunkSize = 1000;
    console.log('save starts ', new Date());

    for (let i = 0; i < length; i += chunkSize) {
      const chunks = data.slice(i, i + chunkSize);
      await this.routeAssignmentRepo.create(chunks);
    }
    console.log('save ends ', new Date());
    return null;
  }

  async migrateEmployeeInfo(): Promise<RetailersDetail[]> {
    const data = await this.shahiEmployeeInfoService.findAll();
    console.log(data.length);
    const length = data.length;
    const chunkSize = 1000;
    console.log('save starts ', new Date());

    for (let i = 0; i < length; i += chunkSize) {
      const chunks = data.slice(i, i + chunkSize);
      await this.employeesInfoRepo.create(chunks);
    }
    console.log('save ends ', new Date());
    return null;
  }

  async migrateDistributorReturnedProduct(): Promise<RetailersDetail[]> {
    const data = await this.shahiDistributorReturnedProductService.findAll();
    console.log(data.length);
    const length = data.length;
    const chunkSize = 1000;
    console.log('save starts ', new Date());

    for (let i = 0; i < length; i += chunkSize) {
      const chunks = data.slice(i, i + chunkSize);
      await this.distributorReturnedProductRepo.create(chunks);
    }
    console.log('save ends ', new Date());
    return null;
  }

  async migrateInventoryPreference(): Promise<InventoryPreference[]> {
    const data = await this.shahiInventoryPreferenceService.findAll();
    console.log(data.length);
    const length = data.length;
    const chunkSize = 1000;
    console.log('save starts ', new Date());

    for (let i = 0; i < length; i += chunkSize) {
      const chunks = data.slice(i, i + chunkSize);
      await this.inventoryPreferenceRepo.create(chunks);
    }
    console.log('save ends ', new Date());
    return null;
  }

  async migrateSpecialDiscount(): Promise<SpecialDiscount[]> {
    const data = await this.shahiSpecialDiscountService.findAll();
    console.log(data.length);
    const length = data.length;
    const chunkSize = 1000;
    console.log('save starts ', new Date());

    for (let i = 0; i < length; i += chunkSize) {
      const chunks = data.slice(i, i + chunkSize);
      await this.specialDiscountRepo.create(chunks);
    }
    console.log('save ends ', new Date());
    return null;
  }

  async migrateNeighbourhood(): Promise<Neighbourhood[]> {
    const data = await this.shahiNeighbourhoodService.findAll();
    console.log(data.length);
    const length = data.length;
    const chunkSize = 1000;
    console.log('save starts ', new Date());

    for (let i = 0; i < length; i += chunkSize) {
      const chunks = data.slice(i, i + chunkSize);
      await this.neighbourhoodRepo.create(chunks);
    }
    console.log('save ends ', new Date());
    return null;
  }

  async migrateInventoryTypesUnits(): Promise<InventoryTypesUnits[]> {
    const data = await this.shahiInventoryTypesUnitsService.findAll();
    console.log(data.length);
    const length = data.length;
    const chunkSize = 1000;
    console.log('save starts ', new Date());

    for (let i = 0; i < length; i += chunkSize) {
      const chunks = data.slice(i, i + chunkSize);
      await this.inventoryTypesUnitsRepo.create(chunks);
    }
    console.log('save ends ', new Date());
    return null;
  }
  async migrateBrands(): Promise<Brand[]> {
    const data = await this.shahiBrandService.findAll();
    console.log(data.length);
    const length = data.length;
    const chunkSize = 1000;
    console.log('save starts ', new Date());

    for (let i = 0; i < length; i += chunkSize) {
      const chunks = data.slice(i, i + chunkSize);
      await this.brandRepo.create(chunks);
    }
    console.log('save ends ', new Date());
    return null;
  }
  async migrateRetailerType(): Promise<RetailerType[]> {
    const data = await this.shahiRetailerTypeService.findAll();
    console.log(data.length);
    const length = data.length;
    const chunkSize = 1000;
    console.log('save starts ', new Date());

    for (let i = 0; i < length; i += chunkSize) {
      const chunks = data.slice(i, i + chunkSize);
      await this.retailerTypeRepo.create(chunks);
    }
    console.log('save ends ', new Date());
    return null;
  }

  async migrateStockMangement(): Promise<StockMangement[]> {
    const data = await this.shahiStockMangementService.findAll();
    console.log(data.length);
    const length = data.length;
    const chunkSize = 1000;
    console.log('save starts ', new Date());

    for (let i = 0; i < length; i += chunkSize) {
      const chunks = data.slice(i, i + chunkSize);
      await this.stockMangementRepository.create(chunks);
    }
    console.log('save ends ', new Date());
    return null;
  }

  async migratePosMaterialRetailer(): Promise<PosMaterialRetailer[]> {
    const data = await this.shahiPosMaterialRetailersService.findAll();
    console.log(data.length);
    const length = data.length;
    const chunkSize = 1000;
    console.log('save starts ', new Date());

    for (let i = 0; i < length; i += chunkSize) {
      const chunks = data.slice(i, i + chunkSize);
      await this.posMaterialRetailerRepo.create(chunks);
    }
    console.log('save ends ', new Date());
    return null;
  }

  async migrateSimilarityIndexResult(): Promise<SimilarityIndexResult[]> {
    const data = await this.shahiSimilarityIndexResultService.findAll();
    console.log(data.length);
    const length = data.length;
    const chunkSize = 1000;
    console.log('save starts ', new Date());

    for (let i = 0; i < length; i += chunkSize) {
      const chunks = data.slice(i, i + chunkSize);
      await this.similarityIndexResultRepo.create(chunks);
    }
    console.log('save ends ', new Date());
    return null;
  }

  async migrateAms(): Promise<Ams[]> {
    const data = await this.shahiAmsService.findAll();
    if (Helper.isLength(data)) {
      await Helper.saveDataInchunksIntoWherehouseDb<Ams>(data, this.amsRepo);
    }
    return null;
  }

  async migraterouteRetailler(): Promise<RouteRetailer[]> {
    const data = await this.shahiRouteRetailerService.findAll();
    if (Helper.isLength(data)) {
      await Helper.saveDataInchunksIntoWherehouseDb<RouteRetailer>(
        data,
        this.routeRetailersRepo,
      );
    }
    return null;
  }

  async migrateOrderBookersTarget(): Promise<OrderBookersTarget[]> {
    const data = await this.shahiOrderBookerTargetService.findAll();
    if (Helper.isLength(data)) {
      await Helper.saveDataInchunksIntoWherehouseDb<OrderBookersTarget>(
        data,
        this.orderBookersTargetRepo,
      );
    }
    return null;
  }

  async migrateTerritoryAssignmentNeighbourhood(): Promise<
    TerritoryAssignmentNeighbourhood[]
  > {
    const data =
      await this.shahiTerritoryAssignmentNeighbourhoodService.findAll();
    if (Helper.isLength(data)) {
      await Helper.saveDataInchunksIntoWherehouseDb<TerritoryAssignmentNeighbourhood>(
        data,
        this.territoryAssignmentNeighbourhoodRepo,
      );
    }
    return null;
  }

  async migrateAreaAssignmentLocalitie(): Promise<AreaAssignmentLocalitie[]> {
    const data = await this.shahiAreaAssignmentLocalityService.findAll();
    if (Helper.isLength(data)) {
      await Helper.saveDataInchunksIntoWherehouseDb<AreaAssignmentLocalitie>(
        data,
        this.areaAssignmentLocalitieRepo,
      );
    }
    return null;
  }

  async migrateDistributorProductsMargin(): Promise<
    DistributorProductsMargin[]
  > {
    const data = await this.shahiDistributorProductsMarginService.findAll();
    if (Helper.isLength(data)) {
      await Helper.saveDataInchunksIntoWherehouseDb<DistributorProductsMargin>(
        data,
        this.distributorProductsMarginRepo,
      );
    }
    return null;
  }
}
