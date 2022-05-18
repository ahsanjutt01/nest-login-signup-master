import { AmsLiveRepository } from 'src/repositories/ams/ams.live.repository';
import { AreaAssignmentLocalitieLiveRepository } from 'src/repositories/area-assignment-locality/areaAssignmentLocality.live.repository';
import { BrandLiveRepository } from 'src/repositories/brand/brand.live.repository';
import { DistributorProductsMarginLiveRepository } from 'src/repositories/distributor-product-margin/distributorProductMargin.live.repository';
import { DistributorReturnedProductLiveRepository } from 'src/repositories/distributor-returned-product/distributorReturnedProduct.live.repository';
import { EmployeeInfoLiveRepository } from 'src/repositories/employee-info/employeeInfo.live.repository';
import { InventoryPreferenceLiveRepository } from 'src/repositories/inventory-preference/inventoryPreference.live.repository';
import { InventoryTypesUnitLiveRepository } from 'src/repositories/inventory-types-units/inventoryTypeUnit.live.repository';
import { NeighbourhoodLiveRepository } from 'src/repositories/neighbourhood/neighbourhood.live.repository';
import { OrderBookersTargetLiveRepository } from 'src/repositories/order-booker-target/oderBookerTarget.live.repository';
import { OrderContentLiveRepository } from 'src/repositories/order-content/orderContent.live.repository';
import { OrderLiveRepository } from 'src/repositories/order/order.live.repository';
import { PosMaterialRetailerLiveRepository } from 'src/repositories/pos-material-retailers/posMaterialRetailer.live.repository';
import { RetailersDetailLiveRepository } from 'src/repositories/retailer-detail/retaillerDetail.live.repository';
import { RetailerTypeLiveRepository } from 'src/repositories/retailer-type/retailerType.live.repository';
import { RouteAssignmentLiveRepository } from 'src/repositories/route-assignment/routeAssignment.live.repository';
import { RouteRetailerLiveRepository } from 'src/repositories/route-retailer/routeRetailer.live.repository';
import { SimilarityIndexResultLiveRepository } from 'src/repositories/similarity-index-result/similiarityIndexResult.live.repository';
import { SpecialDiscountLiveRepository } from 'src/repositories/special-discount/specialDiscount.live.repository';
import { StockMangementLiveRepository } from 'src/repositories/stock-mangement/stockMangement.live.repository';
import { TerritoryAssignmentNeighbourhoodLiveRepository } from 'src/repositories/territory-assignment-neighbourhood/territory-assignment-neighbourhood.live.repository';
import { VisitsMarkLiveRepository } from 'src/repositories/visit-mark/visitMark.live.repository';
import { AmsService } from 'src/services/shahi/ams/ams.service';
import { AreaAssignmentLocalityService } from 'src/services/shahi/area-assignment-locality/area-assignment-locality.service';
import { BrandsService } from 'src/services/shahi/brands/brands.service';
import { DistributorProductsMarginService } from 'src/services/shahi/distributor-products-margin/distributor-products-margin.service';
import { DistributorReturnedProductService } from 'src/services/shahi/distributor-returned-product/distributor-returned-product.service';
import { EmployeeInfoService } from 'src/services/shahi/employee-info/employee-info.service';
import { InventoryPreferenceService } from 'src/services/shahi/inventory-preference/inventory-preference.service';
import { InventoryTypesUnitsService } from 'src/services/shahi/inventory-types-units/inventory-types-units.service';
import { NeighbourhoodService } from 'src/services/shahi/neighbourhood/neighbourhood.service';
import { OrderBookerTargetService } from 'src/services/shahi/order-booker-target/order-booker-target.service';
import OrderContentService from 'src/services/shahi/order-content/order-content.service';
import { OrderService } from 'src/services/shahi/order/order.service';
import { PosMaterialRetailersService } from 'src/services/shahi/pos-material-retailers/pos-material-retailers.service';
import { RetailerDetailService } from 'src/services/shahi/retailer-detail/retailer-detail.service';
import { RetailerTypeService } from 'src/services/shahi/retailer-type/retailer-type.service';
import { RouteAssignmentService } from 'src/services/shahi/route-assignment/route-assignment.service';
import { RouteRetailerService } from 'src/services/shahi/route-retailer/route-retailer.service';
import { SimilarityIndexResultService } from 'src/services/shahi/similarity-index-result/similarity-index-result.service';
import { SpecialDiscountService } from 'src/services/shahi/special-discount/special-discount.service';
import { StockMangementService } from 'src/services/shahi/stock-mangement/stock-mangement.service';
import { TerritoryAssignmentNeighbourhoodService } from 'src/services/shahi/territory-assignment-neighbourhood/territory-assignment-neighbourhood.service';
import { VisitMarkService } from 'src/services/shahi/visit-mark/visit-mark.service';

export const Provider = [
  OrderContentService,
  OrderService,
  VisitMarkService,
  RetailerDetailService,
  RouteAssignmentService,
  EmployeeInfoService,
  DistributorReturnedProductService,
  InventoryPreferenceService,
  SpecialDiscountService,
  NeighbourhoodService,
  InventoryTypesUnitsService,
  BrandsService,
  RetailerTypeService,
  StockMangementService,
  PosMaterialRetailersService,
  AmsService,
  SimilarityIndexResultService,
  RouteRetailerService,
  OrderBookerTargetService,
  TerritoryAssignmentNeighbourhoodService,
  AreaAssignmentLocalityService,
  DistributorProductsMarginService,
  {
    provide: 'AmsRepositoryInterface',
    useClass: AmsLiveRepository,
  },

  {
    provide: 'BrandRepositoryInterface',
    useClass: BrandLiveRepository,
  },
  {
    provide: 'DistributorReturnedProductRepositoryInterface',
    useClass: DistributorReturnedProductLiveRepository,
  },
  {
    provide: 'EmployeeInfoRepositoryInterface',
    useClass: EmployeeInfoLiveRepository,
  },
  {
    provide: 'InventoryPreferenceRepositoryInterface',
    useClass: InventoryPreferenceLiveRepository,
  },
  {
    provide: 'InventoryTypesUnitRepositoryInterface',
    useClass: InventoryTypesUnitLiveRepository,
  },

  {
    provide: 'NeighbourhoodRepositoryInterface',
    useClass: NeighbourhoodLiveRepository,
  },
  {
    provide: 'OrderRepositoryInterface',
    useClass: OrderLiveRepository,
  },
  {
    provide: 'OrderContentRepositoryInterface',
    useClass: OrderContentLiveRepository,
  },
  {
    provide: 'PosMaterialRetailerRepositoryInterface',
    useClass: PosMaterialRetailerLiveRepository,
  },
  {
    provide: 'RetailersDetailRepositoryInterface',
    useClass: RetailersDetailLiveRepository,
  },
  {
    provide: 'RetailerTypeRepositoryInterface',
    useClass: RetailerTypeLiveRepository,
  },
  {
    provide: 'RouteAssignmentRepositoryInterface',
    useClass: RouteAssignmentLiveRepository,
  },

  {
    provide: 'SimilarityIndexResultRepositoryInterface',
    useClass: SimilarityIndexResultLiveRepository,
  },
  {
    provide: 'SpecialDiscountRepositoryInterface',
    useClass: SpecialDiscountLiveRepository,
  },
  {
    provide: 'StockMangementRepositoryInterface',
    useClass: StockMangementLiveRepository,
  },
  {
    provide: 'VisitsMarkRepositoryInterface',
    useClass: VisitsMarkLiveRepository,
  },
  {
    provide: 'RouteRetailerRepositoryInterface',
    useClass: RouteRetailerLiveRepository,
  },
  {
    provide: 'OrderBookersTargetRepositoryInterface',
    useClass: OrderBookersTargetLiveRepository,
  },
  {
    provide: 'TerritoryAssignmentNeighbourhoodRepositoryInterface',
    useClass: TerritoryAssignmentNeighbourhoodLiveRepository,
  },
  {
    provide: 'AreaAssignmentLocalitieRepositoryInterface',
    useClass: AreaAssignmentLocalitieLiveRepository,
  },
  {
    provide: 'DistributorProductsMarginRepositoryInterface',
    useClass: DistributorProductsMarginLiveRepository,
  },
];
