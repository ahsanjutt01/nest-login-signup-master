import { Test, TestingModule } from '@nestjs/testing';
import { AreaAssignmentService } from './area-assignment.service';

describe('AreaAssignmentService', () => {
  let service: AreaAssignmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AreaAssignmentService],
    }).compile();

    service = module.get<AreaAssignmentService>(AreaAssignmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
