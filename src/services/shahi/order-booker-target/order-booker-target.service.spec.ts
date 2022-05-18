import { Test, TestingModule } from '@nestjs/testing';
import { OrderBookerTargetService } from './order-booker-target.service';

describe('OrderBookerTargetService', () => {
  let service: OrderBookerTargetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderBookerTargetService],
    }).compile();

    service = module.get<OrderBookerTargetService>(OrderBookerTargetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
