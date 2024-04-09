import { NatsClientModule } from 'src/nats-client/nats.module';
import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";

@Module({
  imports: [NatsClientModule],
  controllers: [UsersController],
  providers: [],
})

export class UsersModule {}