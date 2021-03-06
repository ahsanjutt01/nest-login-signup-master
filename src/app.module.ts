import { APP_FILTER, APP_INTERCEPTOR } from "@nestjs/core";
import { AllExceptionsFilter } from "./filters/exception.filter";
import { Module } from "@nestjs/common";
// import { ScheduleModule } from "@nestjs/schedule";

import { AuthModule } from "./modules/live/auth/auth.module";
import { LoggingInterceptor } from "./interceptors/logging.interceptor";
import { join } from "path";
import { ServeStaticModule } from "@nestjs/serve-static";

@Module({
  imports: [
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, "public"),
    // }),
    // ScheduleModule.forRoot(),
    // ConfigModule.forRoot({
    //   isGlobal: true,
    // }),
    // TypeOrmModule.forRootAsync({
    //   // name: process.env.DATABASE_WHEREHOUSE_CONNECTION_NAME,
    //   useFactory: () => ({
    //     type: "mysql",
    //     host: process.env.DB_HOST,
    //     port: process.env.DB_PORT,
    //     username: process.env.DB_USER,
    //     password: process.env.DB_PASSWORD,
    //     database: process.env.DB_NAME,
    //     entities: entities,
    //     synchronize: true, // DO NOT TRUE IT IN PRODUCTION. This option migrates any new schema on app launch
    //   }),
    // }),
    AuthModule,
    // BusinessModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },

    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    // {
    //   provide: APP_FILTER,
    //   useClass: BadRequestExceptionFilter,
    // },
  ],
})
export class AppModule {}
