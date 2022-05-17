import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Neighbourhood from 'src/entities/neighbourhood';
import { Repository } from 'typeorm';

@Injectable()
export class NeighbourhoodService {
  constructor(
    @InjectRepository(Neighbourhood, process.env.DATABASE_LIVE_CONNECTION_NAME)
    private readonly repo: Repository<Neighbourhood>,
  ) {}

  async getAll(): Promise<Neighbourhood[]> {
    const data = await this.repo.find();
    return data;
  }
}
