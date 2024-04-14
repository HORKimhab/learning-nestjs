import { Controller, Get, UseInterceptors } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersInterceptor } from "./interceptors/users.interceptor";

@Controller('api/users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    @UseInterceptors(UsersInterceptor)
    getUsers() {
        console.log('Inside getUsers Handler');
        return this.usersService.getUsers(); 
    }
}