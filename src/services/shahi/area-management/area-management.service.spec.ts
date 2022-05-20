import { Test, TestingModule } from '@nestjs/testing';
import { AreaManagementService } from './area-management.service';

describe('AreaManagementService', () => {
  let service: AreaManagementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AreaManagementService],
    }).compile();

    service = module.get<AreaManagementService>(AreaManagementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
