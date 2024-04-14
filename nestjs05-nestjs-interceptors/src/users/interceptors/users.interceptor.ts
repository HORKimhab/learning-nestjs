import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { User } from '../user';

@Injectable()
export class UsersInterceptor implements NestInterceptor {
    intercept(
        context: ExecutionContext, 
        next: CallHandler<User[]>
    ): Observable<any> | Promise<Observable<any>> {
        console.log(context.getClass().name);
        return next.handle().pipe(map((data) => data.map(({password, ...user }) => user)));
    }
}
