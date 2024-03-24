import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utilis/types';

@Injectable()
export class UsersService {

    private fakeUsers = [
        { username: 'HKimahb', email: 'kimhab.zeecode@gmail.com' },
        { username: 'DSreykhuoch', email: 'd.sreykhuoch@gmail.com' },
        { username: 'sokdani', email: 'sokdani@gmail.com' }
    ];
    fetchUsers(){
        return this.fakeUsers;
    }

    createUser(userDetails: CreateUserType){
        this.fakeUsers.push(userDetails);
        return;
    }

    fetchUserById(id: number){
        return { id, username: "DSreykhuoch", email: "d.sreykhuoch@gmail.com" };
    }
}
