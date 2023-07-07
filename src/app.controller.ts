import { Controller, Get, Req } from '@nestjs/common';

@Controller('')
export class AppController {
  @Get()
  index(@Req() request: Request): string {
    console.log(request.body);
    return 'This is the index';
  }
}
