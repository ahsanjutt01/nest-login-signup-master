import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  getHello() {
    return 'Hello World!';
  }
}
