import { Inject, Injectable } from '@nestjs/common';
import EmployeesInfo from 'src/entities/EmployeesInfo';
import { EmployeeInfoRepositoryInterface } from 'src/repositories/employee-info/employeeInfo.reposiory.interface';

@Injectable()
export class EmployeeInfoService {
  constructor(
    @Inject('EmployeeInfoRepositoryInterface')
    private readonly repo: EmployeeInfoRepositoryInterface,
  ) {}

  async findAll(): Promise<EmployeesInfo[]> {
    const data = await this.repo.findAll();
    return data;
  }
}
