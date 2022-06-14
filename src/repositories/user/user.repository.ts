import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import User from "src/entities/_auth/user";
import { Repository } from "typeorm";
import { BaseAbstractRepository } from "../_base/base.abstract.repository";
import { UserRepositoryInterface } from "./user.interface";

@Injectable()
export class UserRepository
  extends BaseAbstractRepository<User>
  implements UserRepositoryInterface
{
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {
    super(userRepository);
  }
}
