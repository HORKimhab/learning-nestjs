import { ClassSerializerInterceptor, Controller, Get, HttpException, HttpStatus, Inject, Param, ParseIntPipe, UseFilters, UseInterceptors } from '@nestjs/common';
import { UserNotFoundException } from 'src/users/exceptions/UserNotFound.exception';
import { HttpExceptionFilter } from 'src/users/filters/HttpException.filter';
import { UsersService } from 'src/users/services/users/users.service';
import { SerializedUser } from 'src/users/types/User';

@Controller('users')
export class UsersController {

    constructor(
        @Inject('USER_SERVICE')
        private readonly userService: UsersService
    ) {}

    @UseInterceptors(ClassSerializerInterceptor)
    @Get('')
    getUsers() {
        return this.userService.getUsers();
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get('/:username')
    getUserByUserName(@Param('username') username: string) {
        const findUser = this.userService.getUserByUserName(username);
        if(findUser) return new SerializedUser(findUser); 
        else throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @UseFilters(HttpExceptionFilter)
    @Get('id/:id')
    findUserById(@Param('id', ParseIntPipe) id: number) {
        const findUser = this.userService.findUserById(id);
        if (findUser) return new SerializedUser(findUser);
        else {
            // throw new UserNotFoundException();
            throw new UserNotFoundException('User Not found', 500);
        }
    }
}
