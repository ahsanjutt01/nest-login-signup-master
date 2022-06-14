import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { SeederProvider } from "./provider";
import { UserTypeSeederService } from "src/services/-seeder/user-type-seeder/user-type-seeder.service";
import entities from "../../entities/exportedEntities";
import { UserSeedService } from "src/services/-seeder/user/user.seed.service";

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: SeederProvider,
  exports: [UserTypeSeederService, UserSeedService],
})
export class seederModule {}
