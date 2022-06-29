import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthController } from "src/controllers/auth/auth.controller";
import User from "src/entities/_auth/user";
import UserType from "src/entities/_auth/userType";
import { MysqlDatabaseProviderModule } from "src/modules/provider.module";
import { AuthProvider } from "./auth.provider";

@Module({
  imports: [
    MysqlDatabaseProviderModule,
    TypeOrmModule.forFeature([User, UserType]),
  ],
  providers: AuthProvider,
  controllers: [AuthController],
})
export class AuthModule {}
