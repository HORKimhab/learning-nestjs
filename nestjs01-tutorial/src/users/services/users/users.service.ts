
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from 'src/users/types/User';
import { User as UserEntity } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'src/users/dto/CreateUser.dto';
import { hashPassword } from 'src/utilis/bcrypt';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UserEntity) 
        private readonly userRepository: Repository<UserEntity>,
    ) {}

    private users: User[] = []; 

    // private users: User[] = [
    //     {
    //         id: 1,
    //         username: 'hkimhab1', 
    //         password: 'password',
    //     }, 
    //     {
    //         id: 2,
    //         username: 'hkimhab2', 
    //         password: 'password',
    //     }, 
    //     {
    //         id: 3, 
    //         username: 'dsreykhuoch1', 
    //         password: 'password',
    //     }, 
    //     {
    //         id: 4, 
    //         username: 'dsreykhuoch2', 
    //         password: 'password',
    //     }
    // ]; 

    getUsers() {
        // return this.users.map((user) => plainToClass(SerializedUser, user)); 
        return this.users.map((user) => new SerializedUser(user)); 
    }

    getUserByUserName(username: string){
        return this.users.find((user) => user.username === username);
    }

    findUserById(id: number) {
        return this.users.find((user) => user.id === id);
    }

    createUser(reqUserDto: CreateUserDto){
        const password = hashPassword(reqUserDto.password)
        const newUser = this.userRepository.create({ ...reqUserDto, password});
        return this.userRepository.save(newUser);
    }

    findUser(username: string) {
        return this.userRepository.findOne({ 
            where: { username },
         });
    }
}

