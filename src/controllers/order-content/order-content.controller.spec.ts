import { Test, TestingModule } from '@nestjs/testing';
import { OrderContentController } from './order-content.controller';

describe('OrderContentController', () => {
  let controller: OrderContentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderContentController],
    }).compile();

    controller = module.get<OrderContentController>(OrderContentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
