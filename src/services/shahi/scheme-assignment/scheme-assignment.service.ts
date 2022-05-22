import { Inject, Injectable } from '@nestjs/common';
import SchemeAssignment from 'src/entities/schemeAssignment';
import { SchemeAssignmentRepositoryInterface } from 'src/repositories/scheme-assignment/schemeAssignment.reposiory.interface';

@Injectable()
export class SchemeAssignmentService {
  constructor(
    @Inject('SchemeAssignmentRepositoryInterface')
    private readonly repo: SchemeAssignmentRepositoryInterface,
  ) {}

  public async findAll(): Promise<SchemeAssignment[]> {
    const data = await this.repo.findAll();
    return data;
  }
}
