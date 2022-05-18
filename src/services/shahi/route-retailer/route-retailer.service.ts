import { Inject, Injectable } from '@nestjs/common';
import RouteRetailer from 'src/entities/routeRetailer';
import { RouteRetailerRepositoryInterface } from 'src/repositories/route-retailer/routeRetailer.reposiory.interface';

@Injectable()
export class RouteRetailerService {
  constructor(
    @Inject('RouteRetailerRepositoryInterface')
    private readonly repo: RouteRetailerRepositoryInterface,
  ) {}

  async findAll(): Promise<RouteRetailer[]> {
    const data = await this.repo.findAll();
    return data;
  }
}
