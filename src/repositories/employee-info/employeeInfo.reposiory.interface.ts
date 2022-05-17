import EmployeesInfo from 'src/entities/EmployeesInfo';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';

export interface EmployeeInfoRepositoryInterface
  extends BaseAbstractRepository<EmployeesInfo> {}
