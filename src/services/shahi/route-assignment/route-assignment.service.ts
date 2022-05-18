import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import RouteAssignment from 'src/entities/routeAssignment';
import { RouteAssignmentRepositoryInterface } from 'src/repositories/route-assignment/routeAssignment.reposiory.interface';
import { Repository } from 'typeorm';

@Injectable()
export class RouteAssignmentService {
  constructor(
    @Inject('RouteAssignmentRepositoryInterface')
    private readonly repo: RouteAssignmentRepositoryInterface,
  ) {}

  async findAll(): Promise<RouteAssignment[]> {
    const data = await this.repo.findAll();
    return data;
  }
}
