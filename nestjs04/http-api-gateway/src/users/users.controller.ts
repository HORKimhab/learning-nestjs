import { Body, Controller, Inject, Post } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { CreateUserDto } from "./dtos/CreateUser.dto";

@Controller('users')
export class UsersController { 

    constructor(@Inject('NATS_SERVICE') private natsclient: ClientProxy) {}

    @Post()
    createUser(@Body() createUserInput: CreateUserDto) {
        console.log(createUserInput);
        this.natsclient.send({ cmd: 'createUser'}, createUserInput);
    }
}