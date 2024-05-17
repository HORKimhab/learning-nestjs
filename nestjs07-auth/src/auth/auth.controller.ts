import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';
import { CreateUserDTO } from 'src/user/request/create-user.dto';
import { LoginDTO } from 'src/user/request/login.dto';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private userService: UserService, 
        private authService: AuthService
    ) {}

    @Post('signup')
    signup(@Body() createUser: CreateUserDTO): Promise<User>{
        return this.userService.create(createUser)
    }

    @Post('login')
    login(@Body() loginDTO: LoginDTO ) {
        return this.authService.login(loginDTO);
    }

    @Get('me')
    getCurrentAuth(@Req() request) {
        return request.user; 
    }
}
