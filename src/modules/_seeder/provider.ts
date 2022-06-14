import { Logger } from "@nestjs/common";
import { UserTypeRepository } from "src/repositories/user-type/user-type.repository";
import { UserRepository } from "src/repositories/user/user.repository";
import { UserTypeSeederService } from "src/services/-seeder/user-type-seeder/user-type-seeder.service";
import { UserSeedService } from "src/services/-seeder/user/user.seed.service";

export const SeederProvider = [
  Logger,
  {
    provide: "UserTypeRepositoryInterface",
    useClass: UserTypeRepository,
  },
  UserTypeSeederService,
  {
    provide: "UserRepositoryInterface",
    useClass: UserRepository,
  },
  UserSeedService,
];
