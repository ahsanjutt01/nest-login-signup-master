import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import RouteAssignment from 'src/entities/routeAssignment';
import { Repository } from 'typeorm';

@Injectable()
export class RouteAssignmentService {
  constructor(
    @InjectRepository(RouteAssignment, 'shahi')
    private readonly repo: Repository<RouteAssignment>,
  ) {}

  async getAll(): Promise<RouteAssignment[]> {
    const data = await this.repo.find();
    return data;
  }
}
