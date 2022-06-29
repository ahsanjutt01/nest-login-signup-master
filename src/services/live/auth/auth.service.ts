import {
  Inject,
  Injectable,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import * as becrypt from "bcrypt";
import { LoginDto, UserDto } from "src/dto/user.dto";
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
    // user.userTypeId = "123e4567-e89b-12d3-a456-426614174001";
    const newUser = await this.repo.create(user);
    const userDto = Helper.removeFields(newUser, [
      "isApproved",
      "password",
      "agree",
    ]);
    return userDto;
  }
  async login(userCreds: LoginDto): Promise<any> {
    const options = {
      select: ["first_name", "email", "password", "last_name", "phone"],
      where: {
        email: userCreds.email,
      },
    };
    const user = await this.repo.findByCondition(options);
    if (user) {
      const isPasswordMatched = await becrypt.compare(
        userCreds.password,
        user.password
      );
      if (isPasswordMatched) {
        const userDto = Helper.removeFields(user, ["password"]);
        return userDto;
      } else {
        throw new UnauthorizedException("email and password incorect");
      }
    } else {
      throw new NotFoundException("user not found");
    }
  }
}
