
import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
import { UsersService } from 'src/users/services/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SessionEntity, User } from 'src/typeorm';
// import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './utilis/LocalStrategy';
import { SessionSerializer } from './utilis/SessionSerializer';

@Module({
    imports: [
        TypeOrmModule.forFeature([User])
    ],
    controllers: [AuthController],
    providers: [
        {
            provide: 'AUTH_SERVICE',
            useClass: AuthService
        }, 
        {
            provide: 'USER_SERVICE',
            useClass: UsersService
        }, 
        LocalStrategy, 
        SessionSerializer
    ]
})
export class AuthModule {}
