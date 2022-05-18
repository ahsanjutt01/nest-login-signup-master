import { Test, TestingModule } from '@nestjs/testing';
import { TerritoryAssignmentNeighbourhoodService } from './territory-assignment-neighbourhood.service';

describe('TerritoryAssignmentNeighbourhoodService', () => {
  let service: TerritoryAssignmentNeighbourhoodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TerritoryAssignmentNeighbourhoodService],
    }).compile();

    service = module.get<TerritoryAssignmentNeighbourhoodService>(TerritoryAssignmentNeighbourhoodService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
