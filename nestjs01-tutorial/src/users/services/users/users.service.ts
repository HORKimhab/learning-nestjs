import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from 'src/users/types/User';

@Injectable()
export class UsersService {
    private users: User[] = [
        {
            username: 'hkimhab1', 
            password: 'password',
        }, 
        {
            username: 'hkimhab2', 
            password: 'password',
        }, 
        {
            username: 'dsreykhuoch1', 
            password: 'password',
        }, 
        {
            username: 'dsreykhuoch2', 
            password: 'password',
        }
    ]; 

    getUsers() {
        // return this.users.map((user) => plainToClass(SerializedUser, user)); 
        return this.users.map((user) => new SerializedUser(user)); 
    }

    getUserByUserName(username: string){
        return this.users.find((user) => user.username === username);
    }

}
