import { Controller, Get, HttpException, Post, UseInterceptors } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersInterceptor } from "./interceptors/users.interceptor";
import { UserErrorInterceptor } from "./interceptors/errors.interceptor";

@Controller('api/users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    @UseInterceptors(UsersInterceptor)
    getUsers() {
        console.log('Inside getUsers Handler');
        return this.usersService.getUsers(); 
    }

    @Post()
    @UseInterceptors(UserErrorInterceptor)
    createUser() {
        throw new HttpException('Bad Request', 400);
    }
}