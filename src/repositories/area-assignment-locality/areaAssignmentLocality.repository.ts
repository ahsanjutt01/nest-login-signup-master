import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import AreaAssignmentLocalitie from 'src/entities/areaAssignmentLocalitie';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { AreaAssignmentLocalitieRepositoryInterface } from './areaAssignmentLocality.reposiory.interface';

@Injectable()
export class AreaAssignmentLocalitieRepository
  extends BaseAbstractRepository<AreaAssignmentLocalitie>
  implements AreaAssignmentLocalitieRepositoryInterface
{
  constructor(
    @InjectRepository(AreaAssignmentLocalitie)
    private readonly areaAssignmentLocalitieRepository: Repository<AreaAssignmentLocalitie>,
  ) {
    super(areaAssignmentLocalitieRepository);
  }
}
