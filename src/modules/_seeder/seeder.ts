import { Injectable, Logger } from "@nestjs/common";
import { UserTypeSeederService } from "src/services/-seeder/user-type-seeder/user-type-seeder.service";

@Injectable()
export class Seeder {
  constructor(
    private readonly logger: Logger,
    private readonly userSeederService: UserTypeSeederService
  ) {}
  async seed() {
    await this.users()
      .then((completed) => {
        this.logger.debug("Successfuly completed seeding users...");
        Promise.resolve(completed);
      })
      .catch((error) => {
        this.logger.error("Failed seeding users...");
        Promise.reject(error);
      });
  }
  async users() {
    return await Promise.all(this.userSeederService.create())
      .then((createdusers) => {
        // Can also use this.logger.verbose('...');
        this.logger.debug(
          "No. of users created : " +
            // Remove all null values and return only created users.
            createdusers.filter(
              (nullValueOrCreatedLanguage) => nullValueOrCreatedLanguage
            ).length
        );
        return Promise.resolve(true);
      })
      .catch((error) => Promise.reject(error));
  }
}
