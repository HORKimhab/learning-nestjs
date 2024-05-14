import { Body, Controller, Post } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';
import { CreateUserDTO } from 'src/user/request/create-user.dto';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {
    constructor(private userService: UserService) {}

    @Post('signup')
    signup(@Body() createUser: CreateUserDTO): Promise<User>{
        return this.userService.create(createUser)
    }
}
