import { Body, Controller, Get, HttpException, Inject, Param, Post } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { CreateUserDto } from "./dtos/CreateUser.dto";
import { lastValueFrom } from "rxjs";

@Controller('users')
export class UsersController { 

    constructor(@Inject('NATS_SERVICE') private natsclient: ClientProxy) {}

    @Post()
    createUser(@Body() createUserInput: CreateUserDto) {
        console.log(createUserInput);
        return this.natsclient.send({ cmd: 'createUser'}, createUserInput);
    }

    @Get(':id')
    async getUserById(@Param('id') id: string){
        // return this.natsclient.send({ cmd: 'getUserById'}, { userId: id });
        const user = await lastValueFrom(this.natsclient.send({ cmd: 'getUserById'}, { userId: id })); 
        if(user) return user; 
        else throw new HttpException('User not Found', 404);

    }
}