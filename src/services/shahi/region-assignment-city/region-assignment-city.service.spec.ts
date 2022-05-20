import { Test, TestingModule } from '@nestjs/testing';
import { RegionAssignmentCityService } from './region-assignment-city.service';

describe('RegionAssignmentCityService', () => {
  let service: RegionAssignmentCityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegionAssignmentCityService],
    }).compile();

    service = module.get<RegionAssignmentCityService>(RegionAssignmentCityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
