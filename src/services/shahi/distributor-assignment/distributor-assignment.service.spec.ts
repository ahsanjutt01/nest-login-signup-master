import { Test, TestingModule } from '@nestjs/testing';
import { DistributorAssignmentService } from './distributor-assignment.service';

describe('DistributorAssignmentService', () => {
  let service: DistributorAssignmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DistributorAssignmentService],
    }).compile();

    service = module.get<DistributorAssignmentService>(DistributorAssignmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
