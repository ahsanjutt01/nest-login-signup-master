import { Test, TestingModule } from '@nestjs/testing';
import { SchemeAssignmentService } from './scheme-assignment.service';

describe('SchemeAssignmentService', () => {
  let service: SchemeAssignmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SchemeAssignmentService],
    }).compile();

    service = module.get<SchemeAssignmentService>(SchemeAssignmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
