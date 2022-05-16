import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from 'src/entities/exportedEntities';
import { BrandsService } from 'src/services/shahi/brands/brands.service';
import { DistributorReturnedProductService } from 'src/services/shahi/distributor-returned-product/distributor-returned-product.service';
import { EmployeeInfoService } from 'src/services/shahi/employee-info/employee-info.service';
import { InventoryPreferenceService } from 'src/services/shahi/inventory-preference/inventory-preference.service';
import { InventoryTypesUnitsService } from 'src/services/shahi/inventory-types-units/inventory-types-units.service';
import { NeighbourhoodService } from 'src/services/shahi/neighbourhood/neighbourhood.service';
import OrderContentService from 'src/services/shahi/order-content/order-content.service';
import { OrderService } from 'src/services/shahi/order/order.service';
import { PosMaterialRetailersService } from 'src/services/shahi/pos-material-retailers/pos-material-retailers.service';
import { RetailerDetailService } from 'src/services/shahi/retailer-detail/retailer-detail.service';
import { RetailerTypeService } from 'src/services/shahi/retailer-type/retailer-type.service';
import { RouteAssignmentService } from 'src/services/shahi/route-assignment/route-assignment.service';
import { SpecialDiscountService } from 'src/services/shahi/special-discount/special-discount.service';
import { StockMangementService } from 'src/services/shahi/stock-mangement/stock-mangement.service';
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
    DistributorReturnedProductService,
    InventoryPreferenceService,
    SpecialDiscountService,
    NeighbourhoodService,
    InventoryTypesUnitsService,
    BrandsService,
    RetailerTypeService,
    StockMangementService,
    PosMaterialRetailersService,
  ],
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
  ],
})
export default class OrderModule {}
