import { Test, TestingModule } from '@nestjs/testing';
import { DistributorReturnedProductService } from './distributor-returned-product.service';

describe('DistributorReturnedProductService', () => {
  let service: DistributorReturnedProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DistributorReturnedProductService],
    }).compile();

    service = module.get<DistributorReturnedProductService>(DistributorReturnedProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
