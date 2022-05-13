import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeInfoService } from './employee-info.service';

describe('EmployeeInfoService', () => {
  let service: EmployeeInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeeInfoService],
    }).compile();

    service = module.get<EmployeeInfoService>(EmployeeInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
