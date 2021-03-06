// import { SpacesService } from './../../services/spaces.service';
// import { S3AssetsDto } from '../../dto/S3AssetsDto';
// import { Controller, Post, Body, Get, Query, Param } from '@nestjs/common';
// import { ApiTags, ApiBody, ApiParam } from '@nestjs/swagger';
// import ShahiOrderContentService from 'src/services/shahi/order-content/order-content.service';
// import { OrdersService } from 'src/services/orders.service';

// @Controller('orders')
// @ApiTags('Orders')
// export class OrdersController {
//   constructor(
//     private orderService: OrdersService,
//     private shahiOrderContentService: ShahiOrderContentService,
//     private spacesService: SpacesService,
//   ) {}

//   @Get('listBuckets')
//   async getBucketsList() {
//     return await this.spacesService.listBuckets();
//   }

//   @Get('createBucket/:bucket')
//   @ApiParam({ name: 'bucket', required: true, description: 'bucket name' })
//   async createNewBucket(@Param('bucket') bucket) {
//     return await this.spacesService.createBucket(bucket);
//   }

//   @Post('saveS3Assets')
//   @ApiBody({ type: [S3AssetsDto] })
//   async saveAssetsToSpaces(@Body() assets: S3AssetsDto[]) {
//     return await this.spacesService.uploadFileToBucket(
//       process.env.S3_DB_SPACE,
//       'backup-123uuid.txt',
//       'Body here',
//     );
//   }
//   @Get('orderContents')
//   async getOrdercontents() {
//     // const data = await this.shahiOrderContentService.findAll();
//     // console.log('controller ');
//     // console.log('length =>', data);
//     // return data;

//     return await this.orderService.getOrders();
//   }
//   @Get('orders')
//   async getOrders() {
//     return await this.orderService.migrateOrders();
//   }

//   @Get('visitMark')
//   async getVisitMark() {
//     return await this.orderService.migrateVisitMarked();
//   }

//   @Get('retaillerVisitMark')
//   async migrateRetailerVisitMarked() {
//     return await this.orderService.migrateRetailerDetail();
//   }

//   @Get('routeAssingmentMigration')
//   async routeAssingmentMigration() {
//     return await this.orderService.migrateRouteAssignment();
//   }

//   @Get('migrateEmployeeInfo')
//   async migrateEmployeeInfo() {
//     return await this.orderService.migrateEmployeeInfo();
//   }

//   @Get('migrateDistributorReturnedProduct')
//   async migrateDistributorReturnedProduct() {
//     return await this.orderService.migrateDistributorReturnedProduct();
//   }

//   @Get('migrateInventoryPreference')
//   async migrateInventoryPreference() {
//     return await this.orderService.migrateInventoryPreference();
//   }
//   @Get('migrateSpecialDiscount')
//   async migrateSpecialDiscount() {
//     return await this.orderService.migrateSpecialDiscount();
//   }
//   @Get('migrateNeighbourhood')
//   async migrateNeighbourhood() {
//     return await this.orderService.migrateNeighbourhood();
//   }

//   @Get('migrateInventoryTypesUnits')
//   async migrateInventoryTypesUnits() {
//     return await this.orderService.migrateInventoryTypesUnits();
//   }

//   @Get('migrateBrands')
//   async migrateBrands() {
//     return await this.orderService.migrateBrands();
//   }

//   @Get('migrateRetailerType')
//   async migrateRetailerType() {
//     return await this.orderService.migrateRetailerType();
//   }
//   @Get('migrateStockMangement')
//   async migrateStockMangement() {
//     return await this.orderService.migrateStockMangement();
//   }

//   @Get('migratePosMaterialRetailer')
//   async migratePosMaterialRetailer() {
//     return await this.orderService.migratePosMaterialRetailer();
//   }

//   @Get('migrateSimilarityIndexResult')
//   async migrateSimilarityIndexResult() {
//     return await this.orderService.migrateSimilarityIndexResult();
//   }

//   @Get('migrateAms')
//   async migrateAms() {
//     return await this.orderService.migrateAms();
//   }

//   @Get('migraterouteRetailler')
//   async migraterouteRetailler() {
//     return await this.orderService.migraterouteRetailler();
//   }

//   @Get('migrateOrderBookersTarget')
//   async migrateOrderBookersTarget() {
//     return await this.orderService.migrateOrderBookersTarget();
//   }
//   @Get('migrateTerritoryAssignmentNeighbourhood')
//   async migrateTerritoryAssignmentNeighbourhood() {
//     return await this.orderService.migrateTerritoryAssignmentNeighbourhood();
//   }
//   @Get('migrateAreaAssignmentLocalitie')
//   async migrateAreaAssignmentLocalitie() {
//     return await this.orderService.migrateAreaAssignmentLocalitie();
//   }

//   @Get('migrateDistributorProductsMargin')
//   async migrateDistributorProductsMargin() {
//     return await this.orderService.migrateDistributorProductsMargin();
//   }

//   @Get('migrateAreaAssignment')
//   async migrateAreaAssignment() {
//     return await this.orderService.migrateAreaAssignment();
//   }

//   @Get('migratePosMaterialItem')
//   async migratePosMaterialItem() {
//     return await this.orderService.migratePosMaterialItem();
//   }

//   @Get('migrateRegionAssignment')
//   async migrateRegionAssignment() {
//     return await this.orderService.migrateRegionAssignment();
//   }

//   @Get('migrateSubInventoryManagement')
//   async migrateSubInventoryManagement() {
//     return await this.orderService.migrateSubInventoryManagement();
//   }

//   @Get('migrateSubCategory')
//   async migrateSubCategory() {
//     return await this.orderService.migrateSubCategory();
//   }

//   @Get('migrateRegionsInfo')
//   async migrateRegionsInfo() {
//     return await this.orderService.migrateRegionsInfo();
//   }

//   @Get('migrateDistributorsAssignment')
//   async migrateDistributorsAssignment() {
//     return await this.orderService.migrateDistributorsAssignment();
//   }

//   @Get('migrateCity')
//   async migrateCity() {
//     return await this.orderService.migrateCity();
//   }

//   @Get('migrateTerritoryManagement')
//   async migrateTerritoryManagement() {
//     return await this.orderService.migrateTerritoryManagement();
//   }

//   @Get('migrateRegionAssignmentCity')
//   async migrateRegionAssignmentCity() {
//     return await this.orderService.migrateRegionAssignmentCity();
//   }

//   @Get('migrateDesignation')
//   async migrateDesignation() {
//     return await this.orderService.migrateDesignation();
//   }

//   @Get('migrateProvince')
//   async migrateProvince() {
//     return await this.orderService.migrateProvince();
//   }

//   @Get('migrateScheme')
//   async migrateScheme() {
//     return await this.orderService.migrateScheme();
//   }

//   @Get('migrateSegment')
//   async migrateSegment() {
//     return await this.orderService.migrateSegment();
//   }

//   @Get('migrateAreaManagement')
//   async migrateAreaManagement() {
//     return await this.orderService.migrateAreaManagement();
//   }
// }
