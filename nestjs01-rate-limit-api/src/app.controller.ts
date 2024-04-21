import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { SkipThrottle, Throttle } from '@nestjs/throttler';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // For specific endpoint
  @SkipThrottle()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // (30000 ms = 30 seconds * 1000 ms/second).
  @Throttle({ default: { limit: 3, ttl: 3000 } })
  @Get('users')
  getUsers() {
    return [];
  }

  @Throttle({ default: { limit: 3, ttl: 3000 } })
  @Get('users/posts')
  getUsersPosts() {
    return {};
  }
}
