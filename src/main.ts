import {
  BadRequestException,
  ValidationError,
  ValidationPipe,
} from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as express from "express";
import { join } from "path";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use("/public", express.static(join(__dirname, "..", "public")));

  const config = new DocumentBuilder()
    .setTitle("Data Warehouse APIs")
    .setDescription("Data Warehouse API description")
    .setVersion("1.0")
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup("api", app, document);
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (validationErrors: ValidationError[] = []) => {
        const errorMessages = {};
        validationErrors.forEach((error) => {
          errorMessages[error.property] = Object.values(error.constraints)
            .join(". ")
            .trim();
        });
        return new BadRequestException(errorMessages);
      },
    })
  );
  // app.useGlobalInterceptors(new LoggingInterceptor());
  await app.listen(3000);
}
bootstrap();
