import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiBody, ApiConsumes, ApiTags } from "@nestjs/swagger";
import { BusinessDto } from "src/dto/bussiness.dto";
import { BusinessService } from "src/services/live/business/business.service";
import { MulterOptions } from "src/util/multer.config";

@Controller("business")
@ApiTags("business")
export class BusinessController {
  constructor(private businessService: BusinessService) {}

  @Post("business")
  @ApiConsumes("multipart/form-data")
  @UseInterceptors(FileInterceptor("file", MulterOptions))
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        // comment: { type: "string" },
        // outletId: { type: "integer" },
        file: {
          type: "string",
          format: "binary",
        },
      },
    },
  })
  async create(@UploadedFile() file: Express.Multer.File) {
    // return await this.businessService.create(bussiness);
    console.log(file);
    console.log(process.env.UPLOAD_LOCATION);
  }
}
