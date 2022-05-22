import { AmsRepository } from 'src/repositories/ams/ams.repository';
import { AreaAssignmentLocalitieRepository } from 'src/repositories/area-assignment-locality/areaAssignmentLocality.repository';
import { AreaAssignmentRepository } from 'src/repositories/area-assignment/areaAssignment.repository';
import { AreaManagementRepository } from 'src/repositories/area-management/areaMangement.repository';
import { BrandRepository } from 'src/repositories/brand/brand.repository';
import { CityRepository } from 'src/repositories/city/city.repository';
import { DesignationRepository } from 'src/repositories/designation/designation.repository';
import { DistributorsAssignmentRepository } from 'src/repositories/distributor-assignment/distributorAssignment.repository';
import { DistributorProductsMarginRepository } from 'src/repositories/distributor-product-margin/distributorProductMargin.repository';
import { DistributorReturnedProductRepository } from 'src/repositories/distributor-returned-product/distributorReturnedProduct.repository';
import { EmployeeInfoRepository } from 'src/repositories/employee-info/employeeInfo.repository';
import { InventoryPrefernceRepository } from 'src/repositories/inventory-preference/inventoryPreference.repository';
import { InventoryTypesUnitsRepository } from 'src/repositories/inventory-types-units/inventoryTypeUnit.repository';
import { NeighbourhoodRepository } from 'src/repositories/neighbourhood/neighbourhood.repository';
import { OrderBookersTargetRepository } from 'src/repositories/order-booker-target/oderBookerTarget.repository';
import { OrderContentRepository } from 'src/repositories/order-content/orderContent.repository';
import { OrderRepository } from 'src/repositories/order/order.repository';
import { PosMaterialItemRepository } from 'src/repositories/pos-material-item/posMaterialItem.repository';
import { PosMaterialRetailerRepository } from 'src/repositories/pos-material-retailers/posMaterialRetailer.repository';
import { ProvinceRepository } from 'src/repositories/province/province.repository';
import { RegionAssignmentCityRepository } from 'src/repositories/region-assignment-city/regionAssignmentCity.repository';
import { RegionAssignmentRepository } from 'src/repositories/region-assignment/regionAssignment.repository';
import { RegionsInfoRepository } from 'src/repositories/region-info/regionInfo.repository';
import { RetailersDetailRepository } from 'src/repositories/retailer-detail/retaillerDetail.repository';
import { RetailerTypeRepository } from 'src/repositories/retailer-type/retailerType.repository';
import { RouteAssignmentRepository } from 'src/repositories/route-assignment/routeAssignment.repository';
import { RouteRetailerRepository } from 'src/repositories/route-retailer/routeRetailer.repository';
import { SchemeAssignmentRepository } from 'src/repositories/scheme-assignment/schemeAssignment.repository';
import { SchemeRepository } from 'src/repositories/scheme/scheme.repository';
import { SegmentRepository } from 'src/repositories/segment/segment.repository';
import { SimilarityIndexResultRepository } from 'src/repositories/similarity-index-result/similiarityIndexResult.repository';
import { SpecialDiscountRepository } from 'src/repositories/special-discount/specialDiscount.repository';
import { StockMangementRepository } from 'src/repositories/stock-mangement/stockMangement.repository';
import { SubCategoryRepository } from 'src/repositories/sub-category/subCategory.repository';
import { SubInventoryManagementRepository } from 'src/repositories/sub-inventory-management/subInventoryManagement.repository';
import { TerritoryAssignmentNeighbourhoodRepository } from 'src/repositories/territory-assignment-neighbourhood/territory-assignment-neighbourhood.repository';
import { TerritoryManagementRepository } from 'src/repositories/territory-management/territoryManagement.repository';
import { VisitsMarkRepository } from 'src/repositories/visit-mark/visitMark.repository';
import { OrdersService } from 'src/services/orders.service';
import { SpacesService } from 'src/services/spaces.service';

export const Provider = [
  OrdersService,
  SpacesService,
  {
    provide: 'AmsRepositoryInterface',
    useClass: AmsRepository,
  },

  {
    provide: 'BrandRepositoryInterface',
    useClass: BrandRepository,
  },
  {
    provide: 'DistributorReturnedProductRepositoryInterface',
    useClass: DistributorReturnedProductRepository,
  },
  {
    provide: 'EmployeeInfoRepositoryInterface',
    useClass: EmployeeInfoRepository,
  },
  {
    provide: 'InventoryPreferenceRepositoryInterface',
    useClass: InventoryPrefernceRepository,
  },
  {
    provide: 'InventoryTypesUnitRepositoryInterface',
    useClass: InventoryTypesUnitsRepository,
  },

  {
    provide: 'NeighbourhoodRepositoryInterface',
    useClass: NeighbourhoodRepository,
  },
  {
    provide: 'OrderRepositoryInterface',
    useClass: OrderRepository,
  },
  {
    provide: 'OrderContentRepositoryInterface',
    useClass: OrderContentRepository,
  },
  {
    provide: 'PosMaterialRetailerRepositoryInterface',
    useClass: PosMaterialRetailerRepository,
  },
  {
    provide: 'RetailersDetailRepositoryInterface',
    useClass: RetailersDetailRepository,
  },
  {
    provide: 'RetailerTypeRepositoryInterface',
    useClass: RetailerTypeRepository,
  },
  {
    provide: 'RouteAssignmentRepositoryInterface',
    useClass: RouteAssignmentRepository,
  },

  {
    provide: 'SimilarityIndexResultRepositoryInterface',
    useClass: SimilarityIndexResultRepository,
  },
  {
    provide: 'SpecialDiscountRepositoryInterface',
    useClass: SpecialDiscountRepository,
  },
  {
    provide: 'StockMangementRepositoryInterface',
    useClass: StockMangementRepository,
  },
  {
    provide: 'VisitsMarkRepositoryInterface',
    useClass: VisitsMarkRepository,
  },
  {
    provide: 'RouteRetailerRepositoryInterface',
    useClass: RouteRetailerRepository,
  },
  {
    provide: 'OrderBookersTargetRepositoryInterface',
    useClass: OrderBookersTargetRepository,
  },
  {
    provide: 'TerritoryAssignmentNeighbourhoodRepositoryInterface',
    useClass: TerritoryAssignmentNeighbourhoodRepository,
  },
  {
    provide: 'AreaAssignmentLocalitieRepositoryInterface',
    useClass: AreaAssignmentLocalitieRepository,
  },
  {
    provide: 'DistributorProductsMarginRepositoryInterface',
    useClass: DistributorProductsMarginRepository,
  },

  {
    provide: 'AreaAssignmentRepositoryInterface',
    useClass: AreaAssignmentRepository,
  },
  {
    provide: 'PosMaterialItemRepositoryInterface',
    useClass: PosMaterialItemRepository,
  },
  {
    provide: 'RegionAssignmentRepositoryInterface',
    useClass: RegionAssignmentRepository,
  },
  {
    provide: 'SubInventoryManagementRepositoryInterface',
    useClass: SubInventoryManagementRepository,
  },

  {
    provide: 'SubCategoryRepositoryInterface',
    useClass: SubCategoryRepository,
  },
  {
    provide: 'RegionsInfoRepositoryInterface',
    useClass: RegionsInfoRepository,
  },
  {
    provide: 'DistributorsAssignmentRepositoryInterface',
    useClass: DistributorsAssignmentRepository,
  },
  {
    provide: 'CityRepositoryInterface',
    useClass: CityRepository,
  },
  {
    provide: 'TerritoryManagementRepositoryInterface',
    useClass: TerritoryManagementRepository,
  },
  {
    provide: 'RegionAssignmentCityRepositoryInterface',
    useClass: RegionAssignmentCityRepository,
  },

  {
    provide: 'DesignationRepositoryInterface',
    useClass: DesignationRepository,
  },

  {
    provide: 'ProvinceRepositoryInterface',
    useClass: ProvinceRepository,
  },

  {
    provide: 'SchemeRepositoryInterface',
    useClass: SchemeRepository,
  },

  {
    provide: 'SegmentRepositoryInterface',
    useClass: SegmentRepository,
  },
  {
    provide: 'AreaManagementRepositoryInterface',
    useClass: AreaManagementRepository,
  },
  {
    provide: 'SchemeAssignmentRepositoryInterface',
    useClass: SchemeAssignmentRepository,
  },
];
