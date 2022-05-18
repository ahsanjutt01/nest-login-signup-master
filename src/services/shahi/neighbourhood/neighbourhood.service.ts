import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Neighbourhood from 'src/entities/neighbourhood';
import { NeighbourhoodLiveRepository } from 'src/repositories/neighbourhood/neighbourhood.live.repository';
import { Repository } from 'typeorm';

@Injectable()
export class NeighbourhoodService {
  constructor(
    @Inject('NeighbourhoodRepositoryInterface')
    private readonly repo: NeighbourhoodLiveRepository,
  ) {}

  async findAll(): Promise<Neighbourhood[]> {
    const data = await this.repo.findAll();
    return data;
  }
}
