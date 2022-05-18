import { Inject, Injectable } from '@nestjs/common';
import AreaAssignmentLocalitie from 'src/entities/areaAssignmentLocalitie';
import { AreaAssignmentLocalitieRepositoryInterface } from 'src/repositories/area-assignment-locality/areaAssignmentLocality.reposiory.interface';

@Injectable()
export class AreaAssignmentLocalityService {
  constructor(
    @Inject('AreaAssignmentLocalitieRepositoryInterface')
    private readonly repo: AreaAssignmentLocalitieRepositoryInterface,
  ) {}

  async findAll(): Promise<AreaAssignmentLocalitie[]> {
    const data = await this.repo.findAll();
    return data;
  }
}
