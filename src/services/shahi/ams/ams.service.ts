import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Ams from 'src/entities/ams';
import { Repository } from 'typeorm';

@Injectable()
export class AmsService {
  constructor(
    @InjectRepository(Ams, 'shahi')
    private readonly repo: Repository<Ams>,
  ) {}

  async getAll(): Promise<Ams[]> {
    const data = await this.repo.find();
    return data;
  }
}
