import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import OrderContentService from 'src/services/shahi/order-content/order-content.service';

@ApiTags('A Order Content')
@Controller('order-content')
export class OrderContentController {
  constructor(private shahiOrderContentService: OrderContentService) {}
  @Get('orderContents')
  async getOrdercontents() {
    return this.shahiOrderContentService.findAll();
  }
}
