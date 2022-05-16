import { Test, TestingModule } from '@nestjs/testing';
import { SimilarityIndexResultService } from './similarity-index-result.service';

describe('SimilarityIndexResultService', () => {
  let service: SimilarityIndexResultService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SimilarityIndexResultService],
    }).compile();

    service = module.get<SimilarityIndexResultService>(SimilarityIndexResultService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
