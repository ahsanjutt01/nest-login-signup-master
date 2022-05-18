import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import PosMaterialRetailer from 'src/entities/posMaterialRetailer';
import { PosMaterialRetailerLiveRepository } from 'src/repositories/pos-material-retailers/posMaterialRetailer.live.repository';
import { Repository } from 'typeorm';

@Injectable()
export class PosMaterialRetailersService {
  constructor(
    @Inject('PosMaterialRetailerRepositoryInterface')
    private readonly repo: PosMaterialRetailerLiveRepository,
  ) {}

  async findAll(): Promise<PosMaterialRetailer[]> {
    const data = await this.repo.findAll();
    return data;
  }
}
