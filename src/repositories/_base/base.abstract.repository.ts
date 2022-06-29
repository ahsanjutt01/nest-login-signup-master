import { BaseInterfaceRepository } from "./base.interface.repository";
import { DeleteResult, Repository } from "typeorm";

export abstract class BaseAbstractRepository<T>
  implements BaseInterfaceRepository<T>
{
  private entity: Repository<T>;

  protected constructor(entity: Repository<T>) {
    this.entity = entity;
  }

  public async create(data: T | any): Promise<T> {
    return await this.entity.save(data);
  }

  public async findOneById(filterCondition: T | any): Promise<T> {
    return await this.entity.findOne({ where: filterCondition });
  }

  public async findByCondition(options: any): Promise<T> {
    return await this.entity.findOne({
      select: options.select,
      where: options.where,
    });
  }

  public async findWithRelations(relations: string[]): Promise<T[]> {
    return await this.entity.find({ relations: relations });
  }

  public async findByConditionWithRelations(
    filterCondition: T | any,
    relations: string[]
  ): Promise<T[]> {
    return await this.entity.find({
      where: filterCondition,
      relations: relations,
    });
  }

  public async findAll(): Promise<T[]> {
    return await this.entity.find();
  }

  public async findAllByCondition(filterCondition: any): Promise<T[]> {
    return await this.entity.find(filterCondition);
  }

  public async remove(id: string): Promise<DeleteResult> {
    return await this.entity.delete(id);
  }
}
