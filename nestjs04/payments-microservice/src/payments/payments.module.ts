import { Module } from "@nestjs/common";
import { PaymentsMicroserviceController } from "./payments.controller";
import { NatsClientModule } from "src/nats-client/nats.module";

@Module({
  imports: [NatsClientModule],
  controllers: [PaymentsMicroserviceController],
  providers: [],
})
export class PaymentsModule { }