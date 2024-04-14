import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/typeorm/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dtos/CreateUser.dto";

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

    createUser(createUserDto: CreateUserDto){
        const newUser = this.userRepo.create(createUserDto); 
        return this.userRepo.save(newUser);
    }
}