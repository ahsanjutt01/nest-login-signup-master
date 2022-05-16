import { Test, TestingModule } from '@nestjs/testing';
import { RetailerTypeService } from './retailer-type.service';

describe('RetailerTypeService', () => {
  let service: RetailerTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RetailerTypeService],
    }).compile();

    service = module.get<RetailerTypeService>(RetailerTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
