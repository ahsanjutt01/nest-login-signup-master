import { Inject, Injectable } from '@nestjs/common';
import Neighbourhood from 'src/entities/neighbourhood';
import { NeighbourhoodRepositoryInterface } from 'src/repositories/neighbourhood/neighbourhood.reposiory.interface';

@Injectable()
export class NeighbourhoodService {
  constructor(
    @Inject('NeighbourhoodRepositoryInterface')
    private readonly repo: NeighbourhoodRepositoryInterface,
  ) {}

  async findAll(): Promise<Neighbourhood[]> {
    const data = await this.repo.findAll();
    return data;
  }
}
