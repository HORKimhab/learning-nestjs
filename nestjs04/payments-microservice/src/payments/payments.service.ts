import { InjectRepository } from "@nestjs/typeorm";
import { PaymentEntity } from "src/typeorm/payment.entity";
import { Repository } from "typeorm";
import { CreatePaymentDto } from "./dtos/CreatePayment.dto";
import { Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { lastValueFrom } from "rxjs";
import { UserEntity } from "src/typeorm/user.entity";

export class PaymentsService {
    constructor(
        @InjectRepository(PaymentEntity) private paymentRepo: Repository<PaymentEntity>, 
        @Inject('NATS_SERVICE') private natsClient: ClientProxy
    ) {}

    async createPayment({userId, ...resPaymentDto}: CreatePaymentDto) {
        const user = await lastValueFrom<UserEntity>( this.natsClient.send({ cmd: 'getUserById' }, {userId }));

        console.log(user);

        if(user){
            const newPayment = this.paymentRepo.create({
                ...resPaymentDto, 
                user
            }); 
            console.log(newPayment);
            return this.paymentRepo.save(newPayment);
        }     
        
        return null;
    }
}