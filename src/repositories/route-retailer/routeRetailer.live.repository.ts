import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import RouteRetailer from 'src/entities/routeRetailer';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { RouteRetailerRepositoryInterface } from './routeRetailer.reposiory.interface';

@Injectable()
export class RouteRetailerLiveRepository
  extends BaseAbstractRepository<RouteRetailer>
  implements RouteRetailerRepositoryInterface
{
  constructor(
    @InjectRepository(RouteRetailer, 'shahi')
    public readonly routeRetailerLiveRepository: Repository<RouteRetailer>,
  ) {
    super(routeRetailerLiveRepository);
  }
}
