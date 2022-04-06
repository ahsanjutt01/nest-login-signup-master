import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from "class-validator";

export class S3AssetsDto {

    @ApiProperty()
    @IsNotEmpty()
    base64Asset: string;

}