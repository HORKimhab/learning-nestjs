import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PaymentsModule } from './payments/payments.module';
import { PaymentEntity } from './typeorm/payment.entity';

@Module({
  imports: [TypeOrmModule .forRoot({
    type: 'mysql', 
    host: 'mysql_db', 
    port: 3307,
    database: 'nestjs_db', 
    entities: [PaymentEntity], 
    synchronize: true,
    username: 'root12345',
    password: 'root12345',
  }),
  PaymentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
