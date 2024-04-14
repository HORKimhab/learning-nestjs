import { InjectRepository } from "@nestjs/typeorm";
import { PaymentEntity } from "src/typeorm/payment.entity";
import { Repository } from "typeorm";
import { CreatePaymentDto } from "./dtos/CreatePayment.dto";

export class PaymentsService {
    constructor(@InjectRepository(PaymentEntity) private paymentRepo: Repository<PaymentEntity>) {}

    createPayment(resPaymentDto: CreatePaymentDto) {
        const newPayment = this.paymentRepo.create(resPaymentDto); 
        return this.paymentRepo.save(newPayment);
    }
}