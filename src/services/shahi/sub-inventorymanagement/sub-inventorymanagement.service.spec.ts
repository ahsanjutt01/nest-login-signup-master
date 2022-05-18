import { Test, TestingModule } from '@nestjs/testing';
import { SubInventorymanagementService } from './sub-inventorymanagement.service';

describe('SubInventorymanagementService', () => {
  let service: SubInventorymanagementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubInventorymanagementService],
    }).compile();

    service = module.get<SubInventorymanagementService>(SubInventorymanagementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
