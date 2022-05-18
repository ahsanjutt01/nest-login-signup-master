import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import AreaAssignmentLocalitie from 'src/entities/areaAssignmentLocalitie';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../_base/base.abstract.repository';
import { AreaAssignmentLocalitieRepositoryInterface } from './areaAssignmentLocality.reposiory.interface';

@Injectable()
export class AreaAssignmentLocalitieLiveRepository
  extends BaseAbstractRepository<AreaAssignmentLocalitie>
  implements AreaAssignmentLocalitieRepositoryInterface
{
  constructor(
    @InjectRepository(AreaAssignmentLocalitie, 'shahi')
    public readonly areaAssignmentLocalitieLiveRepository: Repository<AreaAssignmentLocalitie>,
  ) {
    super(areaAssignmentLocalitieLiveRepository);
  }
}
