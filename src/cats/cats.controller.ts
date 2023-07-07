import { Controller, Get, Req } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  index(): string {
    return 'Cats are here';
  }
}
