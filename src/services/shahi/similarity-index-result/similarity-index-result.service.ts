import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import SimilarityIndexResult from 'src/entities/similarityIndexResult';
import { Repository } from 'typeorm';

@Injectable()
export class SimilarityIndexResultService {
  constructor(
    @InjectRepository(SimilarityIndexResult, 'shahi')
    private readonly repo: Repository<SimilarityIndexResult>,
  ) {}

  async getAll(): Promise<SimilarityIndexResult[]> {
    const data = await this.repo.find();
    return data;
  }
}
