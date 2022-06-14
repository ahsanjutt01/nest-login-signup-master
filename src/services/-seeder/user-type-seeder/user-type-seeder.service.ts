import { Inject, Injectable } from "@nestjs/common";
import userTypeData from "src/database/data/userType.data";
import UserType from "src/entities/_auth/userType";
import { UserTypeRepositoryInterface } from "src/repositories/user-type/user-type.interface";

@Injectable()
export class UserTypeSeederService {
  constructor(
    @Inject("UserTypeRepositoryInterface")
    private repo: UserTypeRepositoryInterface
  ) {}

  create(): Array<Promise<UserType>> {
    return userTypeData.map(async (userType) => {
      return await this.repo
        .findByCondition({ title: userType.title })
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
