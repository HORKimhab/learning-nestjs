import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ValidateCustomerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Hello, Universe from middleware...! ValidateCustomerMiddleware');
    const { authorization } = req.headers;
    if(!authorization) 
      return res.status(403).send({
        error: 'No Authentication'
      });
  
    if(authorization === '123'){
      next();
    } else {
      return res.status(403).send({
        error: 'Invalid Authentication'
      });
    }
  }
}
