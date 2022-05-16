import { Test, TestingModule } from '@nestjs/testing';
import { StockMangementService } from './stock-mangement.service';

describe('StockMangementService', () => {
  let service: StockMangementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StockMangementService],
    }).compile();

    service = module.get<StockMangementService>(StockMangementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
