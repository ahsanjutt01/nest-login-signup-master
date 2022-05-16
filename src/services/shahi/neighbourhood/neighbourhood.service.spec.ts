import { Test, TestingModule } from '@nestjs/testing';
import { NeighbourhoodService } from './neighbourhood.service';

describe('NeighbourhoodService', () => {
  let service: NeighbourhoodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NeighbourhoodService],
    }).compile();

    service = module.get<NeighbourhoodService>(NeighbourhoodService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
