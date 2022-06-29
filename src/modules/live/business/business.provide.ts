import { Logger } from "@nestjs/common";
import { BusinessRepository } from "src/repositories/business/business.repository";
import { AuthService } from "src/services/live/auth/auth.service";
import { BusinessService } from "src/services/live/business/business.service";

export const BusinessProvider = [
  Logger,
  {
    provide: "BusinessRepositoryInterface",
    useClass: BusinessRepository,
  },
  BusinessService,
];
