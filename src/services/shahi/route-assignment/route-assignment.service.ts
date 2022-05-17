import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import RouteAssignment from 'src/entities/routeAssignment';
import { Repository } from 'typeorm';

@Injectable()
export class RouteAssignmentService {
  constructor(
    @InjectRepository(
      RouteAssignment,
      process.env.DATABASE_LIVE_CONNECTION_NAME,
    )
    private readonly repo: Repository<RouteAssignment>,
  ) {}

  async getAll(): Promise<RouteAssignment[]> {
    const data = await this.repo.find();
    return data;
  }
}
