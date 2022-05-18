import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import RouteRetailer from 'src/entities/routeRetailer';
import { RouteRetailerRepositoryInterface } from './routeRetailer.reposiory.interface';

@Injectable()
export class RouteRetailerRepository
  extends BaseAbstractRepository<RouteRetailer>
  implements RouteRetailerRepositoryInterface
{
  constructor(
    @InjectRepository(RouteRetailer)
    private readonly routeRetailerRepository: Repository<RouteRetailer>,
  ) {
    super(routeRetailerRepository);
  }
}
