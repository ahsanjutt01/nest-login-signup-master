import { Test, TestingModule } from '@nestjs/testing';
import { PosMaterialRetailersService } from './pos-material-retailers.service';

describe('PosMaterialRetailersService', () => {
  let service: PosMaterialRetailersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PosMaterialRetailersService],
    }).compile();

    service = module.get<PosMaterialRetailersService>(PosMaterialRetailersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
