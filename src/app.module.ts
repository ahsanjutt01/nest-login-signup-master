import { APP_FILTER } from "@nestjs/core";
import { AllExceptionsFilter } from "./filters/exception.filter";
import { Module } from "@nestjs/common";
// import { ScheduleModule } from "@nestjs/schedule";

import { TypeOrmModule } from "@nestjs/typeorm";
import entities from "./entities/exportedEntities";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    // ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      // name: process.env.DATABASE_WHEREHOUSE_CONNECTION_NAME,
      useFactory: () => ({
        type: "mysql",
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: entities,
        synchronize: true, // DO NOT TRUE IT IN PRODUCTION. This option migrates any new schema on app launch
      }),
    }),
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
  controllers: [],
})
export class AppModule {}
