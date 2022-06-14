import { Logger } from "@nestjs/common";
import { UserTypeRepository } from "src/repositories/user-type/user-type.repository";
import { UserTypeSeederService } from "src/services/-seeder/user-type-seeder/user-type-seeder.service";

export const SeederProvider = [
  Logger,
  {
    provide: "UserTypeRepositoryInterface",
    useClass: UserTypeRepository,
  },
  UserTypeSeederService,
];
