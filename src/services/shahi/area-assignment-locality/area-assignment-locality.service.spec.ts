import { Test, TestingModule } from '@nestjs/testing';
import { AreaAssignmentLocalityService } from './area-assignment-locality.service';

describe('AreaAssignmentLocalityService', () => {
  let service: AreaAssignmentLocalityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AreaAssignmentLocalityService],
    }).compile();

    service = module.get<AreaAssignmentLocalityService>(AreaAssignmentLocalityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
