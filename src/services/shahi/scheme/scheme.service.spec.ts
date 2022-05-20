import { Test, TestingModule } from '@nestjs/testing';
import { SchemeService } from './scheme.service';

describe('SchemeService', () => {
  let service: SchemeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SchemeService],
    }).compile();

    service = module.get<SchemeService>(SchemeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
