import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import SimilarityIndexResult from 'src/entities/similarityIndexResult';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { SimilarityIndexResultRepositoryInterface } from './similiarityIndexResult.reposiory.interface';

@Injectable()
export class SimilarityIndexResultRepository
  extends BaseAbstractRepository<SimilarityIndexResult>
  implements SimilarityIndexResultRepositoryInterface
{
  constructor(
    @InjectRepository(SimilarityIndexResult)
    private readonly similarityIndexResultRepository: Repository<SimilarityIndexResult>,
  ) {
    super(similarityIndexResultRepository);
  }
}
