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
// import ShahiOrderContentService from 'src/services/shahi/order-content/order-content.service';

@Controller('orders')
@ApiTags('Orders')
export class OrdersController {
  constructor(
    // private orderService: OrdersService,
    private spacesService: SpacesService,
  ) // private shahiOrderContentService: ShahiOrderContentService,
  {}

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
  //   @Get('orderContents')
  //   async getOrdercontents() {
  //     return this.shahiOrderContentService.findAll();
  //   }
}
