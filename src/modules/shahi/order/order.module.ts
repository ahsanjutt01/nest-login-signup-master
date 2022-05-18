import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from 'src/entities/exportedEntities';
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
import { Provider } from './provider';

@Module({
  imports: [TypeOrmModule.forFeature(entities, 'shahi')],
  providers: Provider,
  exports: [
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
    SimilarityIndexResultService,
    AmsService,
    RouteRetailerService,
    OrderBookerTargetService,
    TerritoryAssignmentNeighbourhoodService,
    AreaAssignmentLocalityService,
    DistributorProductsMarginService,
  ],
})
export default class OrderModule {}
