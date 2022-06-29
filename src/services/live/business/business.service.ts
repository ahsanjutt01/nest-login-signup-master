import { Inject, Injectable } from "@nestjs/common";
import { BusinessDto } from "src/dto/bussiness.dto";
import { BusinessRepositoryInterface } from "src/repositories/business/business.interface";

@Injectable()
export class BusinessService {
  constructor(
    @Inject("BusinessRepositoryInterface")
    private repo: BusinessRepositoryInterface
  ) {}

  async create(business: BusinessDto) {
    console.log(business);
  }
}
