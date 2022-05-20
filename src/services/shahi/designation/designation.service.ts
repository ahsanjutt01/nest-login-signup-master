import { Inject, Injectable } from '@nestjs/common';
import Designation from 'src/entities/designation';
import { DesignationRepositoryInterface } from 'src/repositories/designation/designation.reposiory.interface';

@Injectable()
export class DesignationService {
  constructor(
    @Inject('DesignationRepositoryInterface')
    private readonly repo: DesignationRepositoryInterface,
  ) {}

  async findAll(): Promise<Designation[]> {
    const data = await this.repo.findAll();
    return data;
  }
}
