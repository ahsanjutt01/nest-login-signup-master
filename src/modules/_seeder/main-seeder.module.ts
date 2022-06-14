import { Logger, Module } from "@nestjs/common";
import { MysqlDatabaseProviderModule } from "../provider.module";
import { Seeder } from "./seeder";
import { seederModule } from "./seeder.module";

/**
 * Import and provide seeder classes.
 *
 * @module
 */
@Module({
  imports: [MysqlDatabaseProviderModule, seederModule],
  providers: [Logger, Seeder],
})
export class MainSeederModule {}
