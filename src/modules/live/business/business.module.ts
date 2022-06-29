import { Module } from "@nestjs/common";
import { MulterModule } from "@nestjs/platform-express";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BusinessController } from "src/controllers/business/business.controller";
import Business from "src/entities/business.entity";
import { MysqlDatabaseProviderModule } from "src/modules/provider.module";
import { BusinessProvider } from "./business.provide";

@Module({
  imports: [
    // MulterModule.registerAsync({
    //   useFactory: () => ({
    //     dest: "./dist/upload",
    //   }),
    // }),
    // MysqlDatabaseProviderModule,
    // ProductModule,
    TypeOrmModule.forFeature([Business]),
  ],

  providers: BusinessProvider,
  controllers: [BusinessController],
})
export class BusinessModule {}
