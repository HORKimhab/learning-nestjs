import { Body, ClassSerializerInterceptor, Controller, Get, HttpException, 
    HttpStatus, Inject, Param, ParseIntPipe, Post, UseFilters, UseGuards, UseInterceptors, 
    UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthenticatedGuard } from 'src/auth/utilis/LocalGuard';
import { CreateUserDto } from 'src/users/dto/CreateUser.dto';
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

    @UseGuards(AuthenticatedGuard)
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
    async findUserById(@Param('id', ParseIntPipe) id: number) {
        const findUser = await this.userService.findUserById(id);
        if (findUser) return new SerializedUser(findUser);
        else {
            // throw new UserNotFoundException();
            throw new UserNotFoundException('User Not found', 500);
        }
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    createuser(@Body() inputUserDto: CreateUserDto) {
        return this.userService.createUser(inputUserDto);
    }
}
