import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import UserType from 'src/entities/_auth/userType';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { UserTypeRepositoryInterface } from './user-type.interface';

@Injectable()
export class UserTypeRepository
  extends BaseAbstractRepository<UserType>
  implements UserTypeRepositoryInterface
{
  constructor(
    @InjectRepository(UserType)
    private readonly userTypeRepository: Repository<UserType>,
  ) {
    super(userTypeRepository);
  }
}
