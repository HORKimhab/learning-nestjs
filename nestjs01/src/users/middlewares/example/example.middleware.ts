import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
  // use(req: any, res: any, next: () => void) {
    console.log('Example middlewares');
    // console.log(req.headers.authorization);
    const { authorization } = req.headers;
    if(!authorization)
      throw new HttpException('Not Authorization Token', HttpStatus.FORBIDDEN);

    if(authorization === 'sdlfsdlfewlrwelrewlknsdfe') next();
    else  throw new HttpException('Invaliad Authorization Token', HttpStatus.FORBIDDEN);
  }
}
