import { Test, TestingModule } from '@nestjs/testing';
import { InventoryTypesUnitsService } from './inventory-types-units.service';

describe('InventoryTypesUnitsService', () => {
  let service: InventoryTypesUnitsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InventoryTypesUnitsService],
    }).compile();

    service = module.get<InventoryTypesUnitsService>(InventoryTypesUnitsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
