import { Controller, Inject } from "@nestjs/common";
import { ClientProxy, EventPattern, Payload } from "@nestjs/microservices";
import { CreatePaymentDto } from "./dtos/CreatePayment.dto";
import { PaymentsService } from "./payments.service";

@Controller()
export class PaymentsMicroserviceController {
    // Communicate between Microservices
    constructor(@Inject('NATS_SERVICE') private natsclient: ClientProxy, 
    private paymentsService: PaymentsService,
) {}

    @EventPattern('createPayment')
    async createPayment(@Payload() resPaymentDto: CreatePaymentDto) {
        console.log(resPaymentDto);

        const newPayment = await this.paymentsService.createPayment(resPaymentDto);

        this.natsclient.emit('paymentCreated', newPayment);
    }

}