import { Inject, Injectable } from '@nestjs/common';
import Ams from 'src/entities/ams';
import { AmsRepositoryInterface } from 'src/repositories/ams/ams.reposiory.interface';

@Injectable()
export class AmsService {
  constructor(
    @Inject('AmsRepositoryInterface')
    private readonly repo: AmsRepositoryInterface,
  ) {}

  public async findAll(): Promise<Ams[]> {
    const data = await this.repo.findAll();
    return data;
  }
}
