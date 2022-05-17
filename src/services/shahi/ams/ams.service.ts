import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Ams from 'src/entities/ams';
import { AmsLiveRepository } from 'src/repositories/ams/ams.live.repository';
import { Repository } from 'typeorm';

@Injectable()
export class AmsService {
  constructor(
    @Inject('AmsRepositoryInterface')
    private readonly repo: AmsLiveRepository,
  ) {}

  public async findAll(): Promise<Ams[]> {
    const data = await this.repo.findAll();
    return data;
  }
}
