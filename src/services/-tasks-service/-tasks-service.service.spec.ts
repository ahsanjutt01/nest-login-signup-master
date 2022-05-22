import { Test, TestingModule } from '@nestjs/testing';
import { TasksServiceService } from './-tasks-service.service';

describe('TasksServiceService', () => {
  let service: TasksServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TasksServiceService],
    }).compile();

    service = module.get<TasksServiceService>(TasksServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
