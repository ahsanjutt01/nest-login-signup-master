import { Test, TestingModule } from '@nestjs/testing';
import { InventoryPreferenceService } from './inventory-preference.service';

describe('InventoryPreferenceService', () => {
  let service: InventoryPreferenceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InventoryPreferenceService],
    }).compile();

    service = module.get<InventoryPreferenceService>(InventoryPreferenceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
