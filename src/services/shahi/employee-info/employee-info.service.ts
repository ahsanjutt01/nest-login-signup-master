import { Inject, Injectable } from '@nestjs/common';
import EmployeesInfo from 'src/entities/EmployeesInfo';
import { EmployeeInfoLiveRepository } from 'src/repositories/employee-info/employeeInfo.live.repository';

@Injectable()
export class EmployeeInfoService {
  constructor(
    @Inject('EmployeeInfoRepositoryInterface')
    private readonly repo: EmployeeInfoLiveRepository,
  ) {}

  async findAll(): Promise<EmployeesInfo[]> {
    const data = await this.repo.findAll();
    return data;
  }
}
