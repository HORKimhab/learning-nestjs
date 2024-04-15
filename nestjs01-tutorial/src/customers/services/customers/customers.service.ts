import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {

    users = [
        {
            id: 1, 
            email: 'hkimhab.dev@gmail.com', 
            createdAt: new Date(),
        }, 
        {
            id: 2, 
            email: 'hkimhab2.dev2@gmail.com', 
            createdAt: new Date(),
        }, 
        {
            id: 3, 
            email: 'hkimhab3.dev3@gmail.com', 
            createdAt: new Date(),
        }, 
    ]

    findCustomer(id: number) {
        // return {
        //     id: 1, 
        //     email: 'hkimhab.dev@gmail.com', 
        //     createdAt: new Date(),
        // }

        return this.users.find((user) => user.id === id);
    }
}
