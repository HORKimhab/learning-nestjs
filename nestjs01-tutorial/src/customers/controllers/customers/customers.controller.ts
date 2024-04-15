import { CustomersService } from 'src/customers/services/customers/customers.service';
import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Req, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateCustomerDto } from 'src/customers/typeorm/create.customer.dto';

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

    @Get('')
    getAllCustomers() {
        return this.customerService.getAllCustomers(); 
    }

    @Post('create')
    createCustomer(@Body() inputCustomerDto: CreateCustomerDto){
        // console.log({createdAt: new Date(), ...inputCustomerDto});

        const newCustomer = {
            createdAt: new Date(), 
            ...inputCustomerDto
        };

        this.customerService.createCustomer(newCustomer);
    }
}
