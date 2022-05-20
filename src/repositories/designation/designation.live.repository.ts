import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Designation from 'src/entities/designation';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { DesignationRepositoryInterface } from './designation.reposiory.interface';

@Injectable()
export class DesignationLiveRepository
  extends BaseAbstractRepository<Designation>
  implements DesignationRepositoryInterface
{
  constructor(
    @InjectRepository(Designation, 'shahi')
    public readonly designationLiveRepository: Repository<Designation>,
  ) {
    super(designationLiveRepository);
  }
}
