import { Inject, Injectable } from '@nestjs/common';
import Ams from 'src/entities/ams';
import { AmsRepositoryInterface } from 'src/repositories/ams/ams.reposiory.interface';
import { Equal, LessThan, Not } from 'typeorm';
const moment = require('moment');

@Injectable()
export class AmsService {
  constructor(
    @Inject('AmsRepositoryInterface')
    private readonly repo: AmsRepositoryInterface,
  ) {}

  public async findAll(): Promise<Ams[]> {
    const date = moment(new Date()).format('YYYY-MM-DD');
    console.log('date => ', date);

    const data = await this.repo.findAllByCondition({
      where: {
        created_at: Not(LessThan(date)),
      },
    });
    return data;
  }
}
