import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import Business from "src/entities/business.entity";
import { Repository } from "typeorm";
import { BaseAbstractRepository } from "../_base/base.abstract.repository";
import { BusinessRepositoryInterface } from "./business.interface";

@Injectable()
export class BusinessRepository
  extends BaseAbstractRepository<Business>
  implements BusinessRepositoryInterface
{
  constructor(
    @InjectRepository(Business)
    private readonly businessRepository: Repository<Business>
  ) {
    super(businessRepository);
  }
}
