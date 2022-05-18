import { Inject, Injectable } from '@nestjs/common';
import PosMaterialRetailer from 'src/entities/posMaterialRetailer';
import { PosMaterialRetailerRepositoryInterface } from 'src/repositories/pos-material-retailers/posMaterialRetailer.reposiory.interface';

@Injectable()
export class PosMaterialRetailersService {
  constructor(
    @Inject('PosMaterialRetailerRepositoryInterface')
    private readonly repo: PosMaterialRetailerRepositoryInterface,
  ) {}

  async findAll(): Promise<PosMaterialRetailer[]> {
    const data = await this.repo.findAll();
    return data;
  }
}
