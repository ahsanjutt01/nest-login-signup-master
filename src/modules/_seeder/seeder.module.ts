import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { SeederProvider } from "./provider";
import { UserTypeSeederService } from "src/services/-seeder/user-type-seeder/user-type-seeder.service";
import entities from "../../entities/exportedEntities";

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: SeederProvider,
  exports: [UserTypeSeederService],
})
export class seederModule {}
