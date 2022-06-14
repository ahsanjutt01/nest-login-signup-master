import { Inject, Injectable } from "@nestjs/common";
import userData from "src/database/data/user.data";
import User from "src/entities/_auth/user";
import { UserRepositoryInterface } from "src/repositories/user/user.interface";

@Injectable()
export class UserSeedService {
  constructor(
    @Inject("UserRepositoryInterface")
    private repo: UserRepositoryInterface
  ) {}

  create(): Array<Promise<User>> {
    return userData.map(async (userType) => {
      return await this.repo
        .findByCondition({ email: userType.email })
        .then(async (dbLangauge) => {
          // We check if a language already exists.
          // If it does don't create a new one.
          if (dbLangauge) {
            return Promise.resolve(null);
          }
          return Promise.resolve(
            // or create(language).then(() => { ... });
            await this.repo.create(userType)
          );
        })
        .catch((error) => Promise.reject(error));
    });
  }
}
