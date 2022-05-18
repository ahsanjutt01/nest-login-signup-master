import { Test, TestingModule } from '@nestjs/testing';
import { RegionInfoService } from './region-info.service';

describe('RegionInfoService', () => {
  let service: RegionInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegionInfoService],
    }).compile();

    service = module.get<RegionInfoService>(RegionInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
