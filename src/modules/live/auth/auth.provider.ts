import { Logger } from "@nestjs/common";
import { UserRepository } from "src/repositories/user/user.repository";
import { AuthService } from "src/services/live/auth/auth.service";

export const AuthProvider = [
  Logger,
  // {
  //   provide: "UserTypeRepositoryInterface",
  //   useClass: UserTypeRepository,
  // },
  // UserTypeSeederService,
  {
    provide: "UserRepositoryInterface",
    useClass: UserRepository,
  },
  AuthService,
];
