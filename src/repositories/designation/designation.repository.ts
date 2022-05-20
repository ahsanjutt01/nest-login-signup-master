import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Designation from 'src/entities/designation';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { DesignationRepositoryInterface } from './designation.reposiory.interface';

@Injectable()
export class DesignationRepository
  extends BaseAbstractRepository<Designation>
  implements DesignationRepositoryInterface
{
  constructor(
    @InjectRepository(Designation)
    private readonly designationRepository: Repository<Designation>,
  ) {
    super(designationRepository);
  }
}
