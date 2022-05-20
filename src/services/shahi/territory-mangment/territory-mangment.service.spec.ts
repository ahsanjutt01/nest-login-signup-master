import { Test, TestingModule } from '@nestjs/testing';
import { TerritoryMangmentService } from './territory-mangment.service';

describe('TerritoryMangmentService', () => {
  let service: TerritoryMangmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TerritoryMangmentService],
    }).compile();

    service = module.get<TerritoryMangmentService>(TerritoryMangmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
