import { Inject, Injectable } from '@nestjs/common';
import Scheme from 'src/entities/scheme';
import { SchemeRepositoryInterface } from 'src/repositories/scheme/scheme.reposiory.interface';

@Injectable()
export class SchemeService {
  constructor(
    @Inject('SchemeRepositoryInterface')
    private readonly repo: SchemeRepositoryInterface,
  ) {}

  async findAll(): Promise<Scheme[]> {
    const data = await this.repo.findAll();
    return data;
  }
}
