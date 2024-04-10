import { Body, Controller, Inject, Post } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { CreatePaymentDto } from "./dto/CreatePayment.dto";

@Controller('payments')
export class PaymentsController { 
    constructor(@Inject('NATS_SERVICE') private natsclient: ClientProxy) {}

    @Post()
    createPayment(@Body() inputPaymentDto: CreatePaymentDto) {
        this.natsclient.emit('createPayment', inputPaymentDto);
    }
}