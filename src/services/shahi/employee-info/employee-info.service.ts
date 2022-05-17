import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import EmployeesInfo from 'src/entities/EmployeesInfo';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeInfoService {
  constructor(
    @InjectRepository(EmployeesInfo, process.env.DATABASE_LIVE_CONNECTION_NAME)
    private readonly repo: Repository<EmployeesInfo>,
  ) {}

  async getAll(): Promise<EmployeesInfo[]> {
    const data = await this.repo.find();
    return data;
  }
}
