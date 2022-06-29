import Business from "src/entities/business.entity";
import { BaseAbstractRepository } from "../_base/base.abstract.repository";

export interface BusinessRepositoryInterface
  extends BaseAbstractRepository<Business> {}
