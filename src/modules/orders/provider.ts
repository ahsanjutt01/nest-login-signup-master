import { AmsRepository } from 'src/repositories/ams/ams.repository';
import { BrandRepository } from 'src/repositories/brand/brand.repository';
import { DistributorReturnedProductRepository } from 'src/repositories/distributor-returned-product/distributorReturnedProduct.repository';
import { EmployeeInfoRepository } from 'src/repositories/employee-info/employeeInfo.repository';
import { InventoryPrefernceRepository } from 'src/repositories/inventory-preference/inventoryPreference.repository';
import { InventoryTypesUnitsRepository } from 'src/repositories/inventory-types-units/inventoryTypeUnit.repository';
import { NeighbourhoodRepository } from 'src/repositories/neighbourhood/neighbourhood.repository';
import { OrderContentRepository } from 'src/repositories/order-content/orderContent.repository';
import { OrderRepository } from 'src/repositories/order/order.repository';
import { PosMaterialRetailerRepository } from 'src/repositories/pos-material-retailers/posMaterialRetailer.repository';
import { RetailersDetailRepository } from 'src/repositories/retailer-detail/retaillerDetail.repository';
import { RetailerTypeRepository } from 'src/repositories/retailer-type/retailerType.repository';
import { RouteAssignmentRepository } from 'src/repositories/route-assignment/routeAssignment.repository';
import { SimilarityIndexResultRepository } from 'src/repositories/similarity-index-result/similiarityIndexResult.repository';
import { SpecialDiscountRepository } from 'src/repositories/special-discount/specialDiscount.repository';
import { StockMangementRepository } from 'src/repositories/stock-mangement/stockMangement.repository';
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
];
