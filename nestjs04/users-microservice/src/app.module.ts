
import { Module } from '@nestjs/common';
import { UserModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/user.entity';
import { PaymentEntity } from './typeorm/payment.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', 
      host: 'mysql_db', 
      port: 3307,
      database: 'nestjs_db', 
      entities: [User, PaymentEntity], 
      synchronize: true,
      username: 'root12345',
      password: 'root12345',
  }),
    UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
