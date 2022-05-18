import { Test, TestingModule } from '@nestjs/testing';
import { PosMaterialItemService } from './pos-material-item.service';

describe('PosMaterialItemService', () => {
  let service: PosMaterialItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PosMaterialItemService],
    }).compile();

    service = module.get<PosMaterialItemService>(PosMaterialItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
