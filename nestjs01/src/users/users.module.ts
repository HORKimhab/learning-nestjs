import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { ExampleMiddleware } from './middlewares/example/example.middleware';
import { AnotherMiddleware } from './middlewares/another/another.middleware';


@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AnotherMiddleware).forRoutes(
        {
          path: 'users', 
          method: RequestMethod.GET,
        }, 
        {
          path: 'users/:id', 
          method: RequestMethod.GET,
        }, 
      )
      .apply(ExampleMiddleware)
      // .forRoutes('users');
      // .forRoutes(UsersController);
      .forRoutes(
        {
          path: 'users', 
          method: RequestMethod.GET,
        }, 
        {
          path: 'users/:id', 
          method: RequestMethod.GET,
        }, 
      );
  }
}
