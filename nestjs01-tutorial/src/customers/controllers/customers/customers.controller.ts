import { CustomersService } from 'src/customers/services/customers/customers.service';
import { Controller, Get } from '@nestjs/common';

@Controller('customers')
export class CustomersController {

    constructor(private customerService: CustomersService) {}

    @Get('')
    getCustoemr() {
        // return {
        //     id: 1, 
        //     email: 'hkimhab.dev@gmail.com', 
        //     createdAt: new Date(),
        // };
        return this.customerService.findCustomer(); 
    }
}
