import { Inject, Injectable, Logger } from "@nestjs/common";
import * as becrypt from "bcrypt";
import { UserDto } from "src/dto/user.dto";
import { UserRepositoryInterface } from "src/repositories/user/user.interface";
import { Helper } from "src/util/helper";

@Injectable()
export class AuthService {
  constructor(
    @Inject("UserRepositoryInterface")
    private repo: UserRepositoryInterface
  ) {}

  async create(user: UserDto): Promise<any> {
    const password = user.password;
    const hashedPassword = await becrypt.hash(password, 12);
    user.password = hashedPassword;
    user.userTypeId = "123e4567-e89b-12d3-a456-426614174001";
    const newUser = await this.repo.create(user);
    const jj = Helper.removeFields(newUser, [
      "isApproved",
      "password",
      "agree",
    ]);
    return jj;
  }
}
