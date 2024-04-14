import { Controller } from "@nestjs/common";
import { EventPattern, MessagePattern, Payload } from "@nestjs/microservices";
import { CreateUserDto } from "./dtos/CreateUser.dto";
import { UsersService } from "./users.service";

@Controller()
export class UserMicroserviceController { 

    constructor(private usersService: UsersService) {}
    @MessagePattern({ cmd: 'createUser' })
    createUser(@Payload() data: CreateUserDto) {
        // console.log(data);
        // return data; 
        return this.usersService.createUser(data);
    }

    @EventPattern('paymentCreated')
    paymentCreated(@Payload() data: any){
        console.log(data);
    }
}