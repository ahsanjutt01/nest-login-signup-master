import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { MainSeederModule } from "./modules/_seeder/main-seeder.module";
import { Seeder } from "./modules/_seeder/seeder";

async function bootstrap() {
  NestFactory.createApplicationContext(MainSeederModule)
    .then((appContext) => {
      const logger = appContext.get(Logger);
      const seeder = appContext.get(Seeder);
      seeder
        .seed()
        .then(() => {
          logger.debug("Seeding complete!");
        })
        .catch((error) => {
          logger.error("Seeding failed!");
          throw error;
        })
        .finally(() => appContext.close());
    })
    .catch((error) => {
      throw error;
    });
}
bootstrap();
