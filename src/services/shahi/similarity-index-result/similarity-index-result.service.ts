import { Inject, Injectable } from '@nestjs/common';
import SimilarityIndexResult from 'src/entities/similarityIndexResult';
import { SimilarityIndexResultRepositoryInterface } from 'src/repositories/similarity-index-result/similiarityIndexResult.reposiory.interface';

@Injectable()
export class SimilarityIndexResultService {
  constructor(
    @Inject('SimilarityIndexResultRepositoryInterface')
    private readonly repo: SimilarityIndexResultRepositoryInterface,
  ) {}

  async findAll(): Promise<SimilarityIndexResult[]> {
    const data = await this.repo.findAll();
    return data;
  }
}
