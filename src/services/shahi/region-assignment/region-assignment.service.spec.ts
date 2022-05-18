import { Test, TestingModule } from '@nestjs/testing';
import { RegionAssignmentService } from './region-assignment.service';

describe('RegionAssignmentService', () => {
  let service: RegionAssignmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegionAssignmentService],
    }).compile();

    service = module.get<RegionAssignmentService>(RegionAssignmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
