import { Test, TestingModule } from '@nestjs/testing';
import { DistributorProductsMarginService } from './distributor-products-margin.service';

describe('DistributorProductsMarginService', () => {
  let service: DistributorProductsMarginService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DistributorProductsMarginService],
    }).compile();

    service = module.get<DistributorProductsMarginService>(DistributorProductsMarginService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
