import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Brand from 'src/entities/brand';
import EmployeesInfo from 'src/entities/EmployeesInfo';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { EmployeeInfoRepositoryInterface } from './employeeInfo.reposiory.interface';

@Injectable()
export class EmployeeInfoLiveRepository
  extends BaseAbstractRepository<EmployeesInfo>
  implements EmployeeInfoRepositoryInterface
{
  constructor(
    @InjectRepository(EmployeesInfo, process.env.DATABASE_LIVE_CONNECTION_NAME)
    private readonly employeesInfoLiveRepository: Repository<EmployeesInfo>,
  ) {
    super(employeesInfoLiveRepository);
  }
}
