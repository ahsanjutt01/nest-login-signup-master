import { Injectable, Logger } from "@nestjs/common";
import { UserTypeSeederService } from "src/services/-seeder/user-type-seeder/user-type-seeder.service";
import { UserSeedService } from "src/services/-seeder/user/user.seed.service";

@Injectable()
export class Seeder {
  constructor(
    private readonly logger: Logger,
    private readonly userTypeSeederService: UserTypeSeederService,
    private readonly userSeederService: UserSeedService
  ) {}
  async seed() {
    await this.userType()
      .then((completed) => {
        this.logger.debug("Successfuly completed seeding user Types...");
        Promise.resolve(completed);
      })
      .catch((error) => {
        this.logger.error("Failed seeding users...");
        Promise.reject(error);
      });
    await this.user()
      .then((completed) => {
        this.logger.debug("Successfuly completed seeding users...");
        Promise.resolve(completed);
      })
      .catch((error) => {
        this.logger.error("Failed seeding users...");
        Promise.reject(error);
      });
  }
  async userType() {
    return await Promise.all(this.userTypeSeederService.create())
      .then((createdUserType) => {
        // Can also use this.logger.verbose('...');
        this.logger.debug(
          "No. of userType created : " +
            // Remove all null values and return only created userType.
            createdUserType.filter(
              (nullValueOrCreatedLanguage) => nullValueOrCreatedLanguage
            ).length
        );
        return Promise.resolve(true);
      })
      .catch((error) => Promise.reject(error));
  }
  async user() {
    return await Promise.all(this.userSeederService.create())
      .then((createdUser) => {
        // Can also use this.logger.verbose('...');
        this.logger.debug(
          "No. of user created : " +
            // Remove all null values and return only created userType.
            createdUser.filter(
              (nullValueOrCreatedLanguage) => nullValueOrCreatedLanguage
            ).length
        );
        return Promise.resolve(true);
      })
      .catch((error) => Promise.reject(error));
  }
}
