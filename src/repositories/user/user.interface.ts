import User from "src/entities/_auth/user";
import { BaseAbstractRepository } from "../_base/base.abstract.repository";

export interface UserRepositoryInterface extends BaseAbstractRepository<User> {}
