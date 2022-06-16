import { Body, Controller, Post } from "@nestjs/common";
import { ApiBody, ApiTags } from "@nestjs/swagger";

import { UserDto } from "src/dto/user.dto";
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
}
