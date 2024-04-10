import { NatsClientModule } from 'src/nats-client/nats.module';
import { Module } from "@nestjs/common";
import { PaymentsController } from './payments.controller';

@Module({
  imports: [NatsClientModule],
  controllers: [PaymentsController],
  providers: [],
})
export class PaymentsModule {}