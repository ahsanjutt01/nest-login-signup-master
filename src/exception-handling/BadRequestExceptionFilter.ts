import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  BadRequestException,
} from "@nestjs/common";
import { Request, Response } from "express";

@Catch(BadRequestException)
export class BadRequestExceptionFilter implements ExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const messages = exception.getResponse();
    // console.log("exception => ", exception);

    response
      .status(status)
      // you can manipulate the response here
      .json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
        messages,
        error: "unprocessable entities",
      });
  }
}
