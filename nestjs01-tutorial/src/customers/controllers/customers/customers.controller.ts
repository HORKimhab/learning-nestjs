import { CustomersService } from 'src/customers/services/customers/customers.service';
import { Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Req, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('customers')
export class CustomersController {

    constructor(private customerService: CustomersService) {}

    @Get(':id')
    getCustoemr(
        @Param('id', ParseIntPipe ) id: number,  
        @Req() req: Request, 
        @Res() res: Response) {
        // return {
        //     id: 1, 
        //     email: 'hkimhab.dev@gmail.com', 
        //     createdAt: new Date(),
        // };
        const customer = this.customerService.findCustomer(id); 
        if(customer)  res.send(customer);
        else res.status(400).send({ msg: 'Customer not found!'});
    }

    @Get('/search/:id')
    searchCustomerById(@Param('id', ParseIntPipe ) id: number) {   
        const customer = this.customerService.findCustomer(id); 
        if(customer) return customer; 
        else throw new HttpException('Customer not found!', HttpStatus.BAD_GATEWAY);
    }
}
