import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from 'src/entities/exportedEntities';
import { AmsService } from 'src/services/shahi/ams/ams.service';
import { AreaAssignmentLocalityService } from 'src/services/shahi/area-assignment-locality/area-assignment-locality.service';
import { AreaAssignmentService } from 'src/services/shahi/area-assignment/area-assignment.service';
import { AreaManagementService } from 'src/services/shahi/area-management/area-management.service';
import { BrandsService } from 'src/services/shahi/brands/brands.service';
import { CityService } from 'src/services/shahi/city/city.service';
import { DesignationService } from 'src/services/shahi/designation/designation.service';
import { DistributorAssignmentService } from 'src/services/shahi/distributor-assignment/distributor-assignment.service';
import { DistributorProductsMarginService } from 'src/services/shahi/distributor-products-margin/distributor-products-margin.service';
import { DistributorReturnedProductService } from 'src/services/shahi/distributor-returned-product/distributor-returned-product.service';
import { EmployeeInfoService } from 'src/services/shahi/employee-info/employee-info.service';
import { InventoryPreferenceService } from 'src/services/shahi/inventory-preference/inventory-preference.service';
import { InventoryTypesUnitsService } from 'src/services/shahi/inventory-types-units/inventory-types-units.service';
import { NeighbourhoodService } from 'src/services/shahi/neighbourhood/neighbourhood.service';
import { OrderBookerTargetService } from 'src/services/shahi/order-booker-target/order-booker-target.service';
import OrderContentService from 'src/services/shahi/order-content/order-content.service';
import { OrderService } from 'src/services/shahi/order/order.service';
import { PosMaterialItemService } from 'src/services/shahi/pos-material-item/pos-material-item.service';
import { PosMaterialRetailersService } from 'src/services/shahi/pos-material-retailers/pos-material-retailers.service';
import { ProvinceService } from 'src/services/shahi/province/province.service';
import { RegionAssignmentCityService } from 'src/services/shahi/region-assignment-city/region-assignment-city.service';
import { RegionAssignmentService } from 'src/services/shahi/region-assignment/region-assignment.service';
import { RegionInfoService } from 'src/services/shahi/region-info/region-info.service';
import { RetailerDetailService } from 'src/services/shahi/retailer-detail/retailer-detail.service';
import { RetailerTypeService } from 'src/services/shahi/retailer-type/retailer-type.service';
import { RouteAssignmentService } from 'src/services/shahi/route-assignment/route-assignment.service';
import { RouteRetailerService } from 'src/services/shahi/route-retailer/route-retailer.service';
import { SchemeService } from 'src/services/shahi/scheme/scheme.service';
import { SegmentService } from 'src/services/shahi/segment/segment.service';
import { SimilarityIndexResultService } from 'src/services/shahi/similarity-index-result/similarity-index-result.service';
import { SpecialDiscountService } from 'src/services/shahi/special-discount/special-discount.service';
import { StockMangementService } from 'src/services/shahi/stock-mangement/stock-mangement.service';
import { SubCategoryService } from 'src/services/shahi/sub-category/sub-category.service';
import { SubInventorymanagementService } from 'src/services/shahi/sub-inventorymanagement/sub-inventorymanagement.service';
import { TerritoryAssignmentNeighbourhoodService } from 'src/services/shahi/territory-assignment-neighbourhood/territory-assignment-neighbourhood.service';
import { TerritoryMangmentService } from 'src/services/shahi/territory-mangment/territory-mangment.service';
import { VisitMarkService } from 'src/services/shahi/visit-mark/visit-mark.service';
import { Provider } from './provider';

@Module({
  imports: [TypeOrmModule.forFeature(entities, 'shahi')],
  providers: Provider,
  exports: [
    AreaManagementService,
    SegmentService,
    SchemeService,
    ProvinceService,
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
    AreaAssignmentService,
    PosMaterialItemService,
    RegionAssignmentService,
    SubInventorymanagementService,
    SubCategoryService,
    RegionInfoService,
    DistributorAssignmentService,
    CityService,
    TerritoryMangmentService,
    RegionAssignmentCityService,
    DesignationService,
  ],
})
export default class OrderModule {}
