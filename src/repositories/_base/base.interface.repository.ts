import { DeleteResult } from 'typeorm';

export interface BaseInterfaceRepository<T> {
  create(data: T | any): Promise<T>;

  findOneById(filterCondition: T | any): Promise<T>;

  findByCondition(filterCondition: any): Promise<T>;

  findAll(): Promise<T[]>;

  remove(id: string): Promise<DeleteResult>;

  findWithRelations(relations: any): Promise<T[]>;

  findByConditionWithRelations(
    filterCondition: T | any,
    relations: string[],
  ): Promise<T[]>;
}
