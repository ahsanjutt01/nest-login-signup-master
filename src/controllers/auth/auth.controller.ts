import { Body, Controller, Post, UseFilters } from "@nestjs/common";
import { ApiBody, ApiTags } from "@nestjs/swagger";

import { LoginDto, UserDto } from "src/dto/user.dto";
import { BadRequestExceptionFilter } from "src/exception-handling/BadRequestExceptionFilter";
import { AuthService } from "src/services/live/auth/auth.service";

@Controller("auth")
@ApiTags("Auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("signup")
  @ApiBody({ type: UserDto })
  async signup(@Body() user: UserDto) {
    return await this.authService.create(user);
  }
  @Post("login")
  async login(@Body() userCred: LoginDto) {
    return await this.authService.login(userCred);
  }
}
