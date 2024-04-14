import { CallHandler, ExecutionContext, HttpException, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, catchError, throwError } from "rxjs";

@Injectable()
export class UserErrorInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        // return next.handle();
        
        return next.handle().pipe(
            catchError(() => 
                throwError(() => new HttpException('Intercepted Response', 500))
            ),
        )
    }
}