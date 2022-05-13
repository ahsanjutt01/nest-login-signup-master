import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './filters/exception.filter';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersModule } from './modules/orders/orders.module';
import entities from './entities/exportedEntities';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: entities,
        synchronize: true, // DO NOT TRUE IT IN PRODUCTION. This option migrates any new schema on app launch
      }),
    }),
    TypeOrmModule.forRootAsync({
      name: 'shahi',
      useFactory: () => ({
        type: 'mysql',
        host: process.env.DB_HOST_2,
        port: process.env.DB_PORT,
        username: process.env.DB_USER_2,
        password: process.env.DB_USER_SHAHI_PWD,
        database: process.env.DB_NAME_SHAHI,
        entities: entities,
        synchronize: false, // DO NOT TRUE IT IN PRODUCTION SHAHI. This option migrates any new schema on app launch
      }),
    }),
    OrdersModule,
    // OrderModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    AppService,
  ],
  controllers: [],
})
export class AppModule {}
