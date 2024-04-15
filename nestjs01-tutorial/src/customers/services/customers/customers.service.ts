import { CreateCustomerDto } from 'src/customers/typeorm/create.customer.dto';
import { Injectable } from '@nestjs/common';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {

    private customers: Customer[]  = [
        {
            id: 1, 
            email: 'hkimhab.dev@gmail.com', 
            name: 'HKimahb Dev1',
            createdAt: new Date(),
        }, 
        {
            id: 2, 
            email: 'hkimhab2.dev2@gmail.com', 
            name: 'HKimahb Dev2',
            createdAt: new Date(),
        }, 
        {
            id: 3, 
            email: 'hkimhab3.dev3@gmail.com', 
            name: 'HKimahb Dev3',
            createdAt: new Date(),
        }, 
    ]

    findCustomer(id: number) {
        // return {
        //     id: 1, 
        //     email: 'hkimhab.dev@gmail.com', 
        //     createdAt: new Date(),
        // }

        return this.customers.find((customer) => customer.id === id);
    }

    createCustomer(inputCustomerDto: CreateCustomerDto){
        this.customers.push(inputCustomerDto);
    }

    getAllCustomers(){
        return this.customers; 
    }
}
