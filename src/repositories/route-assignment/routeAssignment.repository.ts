import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import RouteAssignment from 'src/entities/routeAssignment';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { RouteAssignmentRepositoryInterface } from './routeAssignment.reposiory.interface';

@Injectable()
export class RouteAssignmentRepository
  extends BaseAbstractRepository<RouteAssignment>
  implements RouteAssignmentRepositoryInterface
{
  constructor(
    @InjectRepository(RouteAssignment)
    private readonly routeAssignmentRepository: Repository<RouteAssignment>,
  ) {
    super(routeAssignmentRepository);
  }
}
