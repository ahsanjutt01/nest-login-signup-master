import { SpacesService } from './../../services/spaces.service';
import { S3AssetsDto } from '../../dto/S3AssetsDto';
import { Controller, Post, Body, Get, Query, Param } from '@nestjs/common';
import {
  ApiTags,
  ApiProperty,
  ApiOkResponse,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';
// import { OrdersService } from 'src/services/orders.service';
import ShahiOrderContentService from 'src/services/shahi/order-content/order-content.service';
import { OrdersService } from 'src/services/orders.service';

@Controller('orders')
@ApiTags('Orders')
export class OrdersController {
  constructor(
    private orderService: OrdersService,
    private shahiOrderContentService: ShahiOrderContentService,
    private spacesService: SpacesService,
  ) {}

  @Get('listBuckets')
  async getBucketsList() {
    return await this.spacesService.listBuckets();
  }

  @Get('createBucket/:bucket')
  @ApiParam({ name: 'bucket', required: true, description: 'bucket name' })
  async createNewBucket(@Param('bucket') bucket) {
    return await this.spacesService.createBucket(bucket);
  }

  @Post('saveS3Assets')
  @ApiBody({ type: [S3AssetsDto] })
  async saveAssetsToSpaces(@Body() assets: S3AssetsDto[]) {
    return await this.spacesService.uploadFileToBucket(
      process.env.S3_DB_SPACE,
      'backup-123uuid.txt',
      'Body here',
    );
  }
  @Get('orderContents')
  async getOrdercontents() {
    // const data = await this.shahiOrderContentService.findAll();
    // console.log('controller ');
    // console.log('length =>', data);
    // return data;

    return await this.orderService.getOrders();
  }
  @Get('orders')
  async getOrders() {
    return await this.orderService.getAllOrders();
  }

  @Get('visitMark')
  async getVisitMark() {
    return await this.orderService.getVisitMarked();
  }

  @Get('retaillerVisitMark')
  async migrateRetailerVisitMarked() {
    return await this.orderService.migrateRetailerDetail();
  }

  @Get('routeAssingmentMigration')
  async routeAssingmentMigration() {
    return await this.orderService.migrateRouteAssignment();
  }

  @Get('migrateEmployeeInfo')
  async migrateEmployeeInfo() {
    return await this.orderService.migrateEmployeeInfo();
  }

  @Get('migrateDistributorReturnedProduct')
  async migrateDistributorReturnedProduct() {
    return await this.orderService.migrateDistributorReturnedProduct();
  }

  @Get('migrateInventoryPreference')
  async migrateInventoryPreference() {
    return await this.orderService.migrateInventoryPreference();
  }
  @Get('migrateSpecialDiscount')
  async migrateSpecialDiscount() {
    return await this.orderService.migrateSpecialDiscount();
  }
  @Get('migrateNeighbourhood')
  async migrateNeighbourhood() {
    return await this.orderService.migrateNeighbourhood();
  }

  @Get('migrateInventoryTypesUnits')
  async migrateInventoryTypesUnits() {
    return await this.orderService.migrateInventoryTypesUnits();
  }

  @Get('migrateBrands')
  async migrateBrands() {
    return await this.orderService.migrateBrands();
  }

  @Get('migrateRetailerType')
  async migrateRetailerType() {
    return await this.orderService.migrateRetailerType();
  }
  @Get('migrateStockMangement')
  async migrateStockMangement() {
    return await this.orderService.migrateStockMangement();
  }
}
