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
import { AreaAssignmentRepositoryInterface } from 'src/repositories/area-assignment/areaAssignment.reposiory.interface';
import { AreaAssignmentService } from './shahi/area-assignment/area-assignment.service';
import AreaAssignment from 'src/entities/areaAssignment';
import { PosMaterialItemService } from './shahi/pos-material-item/pos-material-item.service';
import { PosMaterialItemRepositoryInterface } from 'src/repositories/pos-material-item/posMaterialItem.reposiory.interface';
import PosMaterialItem from 'src/entities/posMaterialItem';
import { RegionAssignmentService } from './shahi/region-assignment/region-assignment.service';
import { RegionAssignmentRepositoryInterface } from 'src/repositories/region-assignment/regionAssignment.reposiory.interface';
import RegionAssignment from 'src/entities/regionAssignment';
import { SubInventorymanagementService } from './shahi/sub-inventorymanagement/sub-inventorymanagement.service';
import { SubInventoryManagementRepositoryInterface } from 'src/repositories/sub-inventory-management/subInventoryManagement.reposiory.interface';
import SubInventoryManagement from 'src/entities/subInventoryManagement';
import { SubCategoryService } from './shahi/sub-category/sub-category.service';
import { SubCategoryRepositoryInterface } from 'src/repositories/sub-category/subCategory.reposiory.interface';
import SubCategory from 'src/entities/subCategory';
import { RegionInfoService } from './shahi/region-info/region-info.service';
import { RegionsInfoRepositoryInterface } from 'src/repositories/region-info/regionInfo.reposiory.interface';
import RegionsInfo from 'src/entities/regionsInfo';
import { DistributorAssignmentService } from './shahi/distributor-assignment/distributor-assignment.service';
import { DistributorsAssignmentRepositoryInterface } from 'src/repositories/distributor-assignment/distributorAssignment.reposiory.interface';
import DistributorsAssignment from 'src/entities/distributorsAssignment';
import { CityService } from './shahi/city/city.service';
import { CityRepositoryInterface } from 'src/repositories/city/city.reposiory.interface';
import City from 'src/entities/city';
import { TerritoryMangmentService } from './shahi/territory-mangment/territory-mangment.service';
import { TerritoryManagementRepositoryInterface } from 'src/repositories/territory-management/territoryManagement.reposiory.interface';
import TerritoryManagement from 'src/entities/territoryManagement';
import RegionAssignmentCity from 'src/entities/regionAssignmentCity';
import { RegionAssignmentCityRepositoryInterface } from 'src/repositories/region-assignment-city/regionAssignmentCity.reposiory.interface';
import { RegionAssignmentCityService } from './shahi/region-assignment-city/region-assignment-city.service';
import { DesignationService } from './shahi/designation/designation.service';
import { DesignationRepositoryInterface } from 'src/repositories/designation/designation.reposiory.interface';
import Designation from 'src/entities/designation';
import { ProvinceService } from './shahi/province/province.service';
import { ProvinceRepositoryInterface } from 'src/repositories/province/province.reposiory.interface';
import Province from 'src/entities/province';
import { SchemeService } from './shahi/scheme/scheme.service';
import { SchemeRepositoryInterface } from 'src/repositories/scheme/scheme.reposiory.interface';
import Scheme from 'src/entities/scheme';
import { SegmentService } from './shahi/segment/segment.service';
import { SegmentRepositoryInterface } from 'src/repositories/segment/segment.reposiory.interface';
import Segment from 'src/entities/segment';
import { AreaManagementService } from './shahi/area-management/area-management.service';
import { AreaManagementRepositoryInterface } from 'src/repositories/area-management/areaMangement.reposiory.interface';
import AreaManagement from 'src/entities/areaManagement';
import { VisitsMarkRepositoryInterface } from 'src/repositories/visit-mark/visitMark.reposiory.interface';
import { RetailersDetailRepositoryInterface } from 'src/repositories/retailer-detail/retaillerDetail.reposiory.interface';
import { RouteAssignmentRepositoryInterface } from 'src/repositories/route-assignment/routeAssignment.reposiory.interface';
import { InventoryTypesUnitRepositoryInterface } from 'src/repositories/inventory-types-units/inventoryTypeUnit.reposiory.interface';
import { EmployeeInfoRepositoryInterface } from 'src/repositories/employee-info/employeeInfo.reposiory.interface';
import { DistributorReturnedProductRepositoryInterface } from 'src/repositories/distributor-returned-product/DistributorReturnedProduct.reposiory.interface';
import { InventoryPreferenceRepositoryInterface } from 'src/repositories/inventory-preference/inventoryPreference.reposiory.interface';
import { SpecialDiscountRepositoryInterface } from 'src/repositories/special-discount/specialDiscount.reposiory.interface';
import { NeighbourhoodRepositoryInterface } from 'src/repositories/neighbourhood/neighbourhood.reposiory.interface';
import { BrandRepositoryInterface } from 'src/repositories/brand/brand.reposiory.interface';
import { RetailerTypeRepositoryInterface } from 'src/repositories/retailer-type/retailerType.reposiory.interface';
import { StockMangementRepositoryInterface } from 'src/repositories/stock-mangement/stockMangement.reposiory.interface';
import { SimilarityIndexResultRepositoryInterface } from 'src/repositories/similarity-index-result/similiarityIndexResult.reposiory.interface';
import { SchemeAssignmentService } from './shahi/scheme-assignment/scheme-assignment.service';
import { SchemeAssignmentRepositoryInterface } from 'src/repositories/scheme-assignment/schemeAssignment.reposiory.interface';
import SchemeAssignment from 'src/entities/schemeAssignment';

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
    private readonly shahiAreaAssignmentService: AreaAssignmentService,
    private readonly shahiPosMaterialItemService: PosMaterialItemService,
    private readonly shahiRegionAssignmentService: RegionAssignmentService,
    private readonly shahiSubInventorymanagementService: SubInventorymanagementService,
    private readonly shahiSubCategoryService: SubCategoryService,
    private readonly shahiRegionInfoService: RegionInfoService,
    private readonly shahiDistributorAssignmentService: DistributorAssignmentService,
    private readonly shahiCityService: CityService,
    private readonly shahiTerritoryMangmentService: TerritoryMangmentService,
    private readonly shahiRegionAssignmentCityService: RegionAssignmentCityService,
    private readonly shahiDesignationService: DesignationService,
    private readonly shahiProvinceService: ProvinceService,
    private readonly shahiSchemeService: SchemeService,
    private readonly shahiSegmentService: SegmentService,
    private readonly shahiAreaManagementService: AreaManagementService,
    private readonly shahiSchemeAssignmentService: SchemeAssignmentService,

    @Inject('SchemeAssignmentRepositoryInterface')
    private readonly schemeAssignmentRepo: SchemeAssignmentRepositoryInterface,

    @Inject('SchemeRepositoryInterface')
    private readonly SchemeRepo: SchemeRepositoryInterface,

    @Inject('AreaManagementRepositoryInterface')
    private readonly areamanagementRepo: AreaManagementRepositoryInterface,

    @Inject('SegmentRepositoryInterface')
    private readonly segmentRepo: SegmentRepositoryInterface,

    @Inject('ProvinceRepositoryInterface')
    private readonly provinceRepo: ProvinceRepositoryInterface,

    @Inject('OrderRepositoryInterface')
    private readonly orderRepo: OrderRepository,

    @Inject('VisitsMarkRepositoryInterface')
    private readonly visitMarkRepo: VisitsMarkRepositoryInterface,

    @Inject('RetailersDetailRepositoryInterface')
    private readonly retailersDetailRepo: RetailersDetailRepositoryInterface,

    @Inject('RouteAssignmentRepositoryInterface')
    private readonly routeAssignmentRepo: RouteAssignmentRepositoryInterface,

    @Inject('InventoryTypesUnitRepositoryInterface')
    private readonly inventoryTypesUnitsRepo: InventoryTypesUnitRepositoryInterface,

    @Inject('EmployeeInfoRepositoryInterface')
    private readonly employeesInfoRepo: EmployeeInfoRepositoryInterface,

    @Inject('DistributorReturnedProductRepositoryInterface')
    private readonly distributorReturnedProductRepo: DistributorReturnedProductRepositoryInterface,

    @Inject('InventoryPreferenceRepositoryInterface')
    private readonly inventoryPreferenceRepo: InventoryPreferenceRepositoryInterface,

    @Inject('SpecialDiscountRepositoryInterface')
    private readonly specialDiscountRepo: SpecialDiscountRepositoryInterface,

    @Inject('NeighbourhoodRepositoryInterface')
    private readonly neighbourhoodRepo: NeighbourhoodRepositoryInterface,

    @Inject('BrandRepositoryInterface')
    private readonly brandRepo: BrandRepositoryInterface,

    @Inject('RetailerTypeRepositoryInterface')
    private readonly retailerTypeRepo: RetailerTypeRepositoryInterface,

    @Inject('StockMangementRepositoryInterface')
    private readonly stockMangementRepository: StockMangementRepositoryInterface,

    @Inject('PosMaterialRetailerRepositoryInterface')
    private readonly posMaterialRetailerRepo: PosMaterialRetailerRepositoryInterface,

    @Inject('SimilarityIndexResultRepositoryInterface')
    private readonly similarityIndexResultRepo: SimilarityIndexResultRepositoryInterface,

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

    @Inject('AreaAssignmentRepositoryInterface')
    private readonly areaAssignmentRepo: AreaAssignmentRepositoryInterface,

    @Inject('PosMaterialItemRepositoryInterface')
    private readonly posMaterialItemRepo: PosMaterialItemRepositoryInterface,
    @Inject('RegionAssignmentRepositoryInterface')
    private readonly regionAssignmentRepo: RegionAssignmentRepositoryInterface,
    @Inject('RegionAssignmentRepositoryInterface')
    private readonly subInventoryManagementRepo: SubInventoryManagementRepositoryInterface,
    @Inject('RegionAssignmentRepositoryInterface')
    private readonly subCategoryRepo: SubCategoryRepositoryInterface,

    @Inject('RegionAssignmentRepositoryInterface')
    private readonly regionInfoRepo: RegionsInfoRepositoryInterface,

    @Inject('DistributorsAssignmentRepositoryInterface')
    private readonly distributorsAssignmentRepo: DistributorsAssignmentRepositoryInterface,

    @Inject('CityRepositoryInterface')
    private readonly cityRepo: CityRepositoryInterface,

    @Inject('TerritoryManagementRepositoryInterface')
    private readonly territoryManagementRepo: TerritoryManagementRepositoryInterface,

    @Inject('RegionAssignmentCityRepositoryInterface')
    private readonly regionAssignmentCityRepo: RegionAssignmentCityRepositoryInterface,

    @Inject('DesignationRepositoryInterface')
    private readonly designationRepo: DesignationRepositoryInterface,
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

  async migrateOrders(): Promise<Order[]> {
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

  async migrateVisitMarked(): Promise<VisitsMark[]> {
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
    console.log('data ams ', data.length);
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

  async migrateAreaAssignment(): Promise<AreaAssignment[]> {
    const data = await this.shahiAreaAssignmentService.findAll();
    if (Helper.isLength(data)) {
      await Helper.saveDataInchunksIntoWherehouseDb<AreaAssignment>(
        data,
        this.areaAssignmentRepo,
      );
    }
    return null;
  }

  async migratePosMaterialItem(): Promise<PosMaterialItem[]> {
    const data = await this.shahiPosMaterialItemService.findAll();
    if (Helper.isLength(data)) {
      await Helper.saveDataInchunksIntoWherehouseDb<PosMaterialItem>(
        data,
        this.posMaterialItemRepo,
      );
    }
    return null;
  }

  async migrateRegionAssignment(): Promise<RegionAssignment[]> {
    const data = await this.shahiRegionAssignmentService.findAll();
    if (Helper.isLength(data)) {
      await Helper.saveDataInchunksIntoWherehouseDb<RegionAssignment>(
        data,
        this.regionAssignmentRepo,
      );
    }
    return null;
  }

  async migrateSubInventoryManagement(): Promise<SubInventoryManagement[]> {
    const data = await this.shahiSubInventorymanagementService.findAll();
    if (Helper.isLength(data)) {
      await Helper.saveDataInchunksIntoWherehouseDb<SubInventoryManagement>(
        data,
        this.subInventoryManagementRepo,
      );
    }
    return null;
  }

  async migrateSubCategory(): Promise<SubCategory[]> {
    const data = await this.shahiSubCategoryService.findAll();
    if (Helper.isLength(data)) {
      await Helper.saveDataInchunksIntoWherehouseDb<SubCategory>(
        data,
        this.subCategoryRepo,
      );
    }
    return null;
  }

  async migrateRegionsInfo(): Promise<RegionsInfo[]> {
    const data = await this.shahiRegionInfoService.findAll();
    if (Helper.isLength(data)) {
      await Helper.saveDataInchunksIntoWherehouseDb<RegionsInfo>(
        data,
        this.regionInfoRepo,
      );
    }
    return null;
  }

  async migrateDistributorsAssignment(): Promise<DistributorsAssignment[]> {
    const data = await this.shahiDistributorAssignmentService.findAll();
    if (Helper.isLength(data)) {
      await Helper.saveDataInchunksIntoWherehouseDb<DistributorsAssignment>(
        data,
        this.distributorsAssignmentRepo,
      );
    }
    return null;
  }

  async migrateCity(): Promise<City[]> {
    const data = await this.shahiCityService.findAll();
    if (Helper.isLength(data)) {
      await Helper.saveDataInchunksIntoWherehouseDb<City>(data, this.cityRepo);
    }
    return null;
  }

  async migrateTerritoryManagement(): Promise<TerritoryManagement[]> {
    const data = await this.shahiTerritoryMangmentService.findAll();
    if (Helper.isLength(data)) {
      await Helper.saveDataInchunksIntoWherehouseDb<TerritoryManagement>(
        data,
        this.territoryManagementRepo,
      );
    }
    return null;
  }

  async migrateRegionAssignmentCity(): Promise<RegionAssignmentCity[]> {
    const data = await this.shahiRegionAssignmentCityService.findAll();
    if (Helper.isLength(data)) {
      await Helper.saveDataInchunksIntoWherehouseDb<RegionAssignmentCity>(
        data,
        this.regionAssignmentCityRepo,
      );
    }
    return null;
  }

  async migrateDesignation(): Promise<Designation[]> {
    const data = await this.shahiDesignationService.findAll();
    if (Helper.isLength(data)) {
      await Helper.saveDataInchunksIntoWherehouseDb<Designation>(
        data,
        this.designationRepo,
      );
    }
    return null;
  }

  async migrateProvince(): Promise<Province[]> {
    const data = await this.shahiProvinceService.findAll();
    if (Helper.isLength(data)) {
      await Helper.saveDataInchunksIntoWherehouseDb<Province>(
        data,
        this.provinceRepo,
      );
    }
    return null;
  }

  async migrateScheme(): Promise<Scheme[]> {
    const data = await this.shahiSchemeService.findAll();
    if (Helper.isLength(data)) {
      await Helper.saveDataInchunksIntoWherehouseDb<Scheme>(
        data,
        this.SchemeRepo,
      );
    }
    return null;
  }

  async migrateSegment(): Promise<Segment[]> {
    const data = await this.shahiSegmentService.findAll();
    if (Helper.isLength(data)) {
      await Helper.saveDataInchunksIntoWherehouseDb<Segment>(
        data,
        this.segmentRepo,
      );
    }
    return null;
  }

  async migrateAreaManagement(): Promise<AreaManagement[]> {
    const data = await this.shahiAreaManagementService.findAll();
    if (Helper.isLength(data)) {
      await Helper.saveDataInchunksIntoWherehouseDb<AreaManagement>(
        data,
        this.areamanagementRepo,
      );
    }
    return null;
  }

  async migrateSchemeAssignment(): Promise<SchemeAssignment[]> {
    const data = await this.shahiSchemeAssignmentService.findAll();
    if (Helper.isLength(data)) {
      await Helper.saveDataInchunksIntoWherehouseDb<SchemeAssignment>(
        data,
        this.schemeAssignmentRepo,
      );
    }
    return null;
  }
}
