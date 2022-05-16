import { Test, TestingModule } from '@nestjs/testing';
import { SpecialDiscountService } from './special-discount.service';

describe('SpecialDiscountService', () => {
  let service: SpecialDiscountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpecialDiscountService],
    }).compile();

    service = module.get<SpecialDiscountService>(SpecialDiscountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
