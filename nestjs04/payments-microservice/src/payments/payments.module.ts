import { Module } from "@nestjs/common";
import { PaymentsMicroserviceController } from "./payments.controller";
import { NatsClientModule } from "src/nats-client/nats.module";
import { PaymentsService } from "./payments.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PaymentEntity } from "src/typeorm/payment.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([PaymentEntity]),
    NatsClientModule],
  controllers: [PaymentsMicroserviceController],
  providers: [PaymentsService],
})
export class PaymentsModule { }