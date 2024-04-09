import { Module } from '@nestjs/common';
// import { ClientsModule, Transport } from '@nestjs/microservices';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    // ClientsModule.register([
    //   {
    //     name: 'NATS_SERVICE', 
    //     transport: Transport.NATS,
    //     options: {
    //       // servers: ['nats://localhost:4222'],
    //       servers: ['nats://nats'],
    //     }
    //   }
    // ]), 
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
