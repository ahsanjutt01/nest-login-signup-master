import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class UserDto {
  @IsNotEmpty()
  first_name: string;
  @IsNotEmpty()
  last_name: string;
  @IsEmail()
  email: string;
  @IsNotEmpty()
  password: string;
  @IsNotEmpty()
  phone: string;
  // address: string;
  @IsNotEmpty()
  agree: boolean;
  // userTypeId: string;
  @IsNotEmpty()
  signup_medium: number;
  @IsNotEmpty()
  liscene_type: number;
}

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @IsString()
  @Length(1, 20)
  password: string;
}
