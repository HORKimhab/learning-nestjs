import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CustomersController } from './controllers/customers/customers.controller';
import { CustomersService } from './services/customers/customers.service';
import { ValidateCustomerMiddleware } from './middlewares/validate-customer.middleware';
import { ValidateCustomerAccountMiddleware  } from './middlewares/validate-customer-account.middleware';
import { NextFunction, Request } from 'express';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService]
})
export class CustomersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(ValidateCustomerMiddleware, ValidateCustomerAccountMiddleware, 
      // Inline Middleware 
      (req: Request, res: Response, next: NextFunction) => {
        console.log('Inline Middleware')
        next(); 
      }
    )
    .exclude({
      path: '/create',
      method: RequestMethod.POST,
    })
    // .forRoutes(CustomersController, UsersController);
    .forRoutes(CustomersController);
    // .forRoutes({
    //   path: 'customers/search/:id', 
    //   method: RequestMethod.GET,
    // })
  }
}
