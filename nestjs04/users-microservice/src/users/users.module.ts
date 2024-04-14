import { Module } from '@nestjs/common';
import { UserMicroserviceController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/user.entity';
import { PaymentEntity } from 'src/typeorm/payment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, PaymentEntity])],
  controllers: [UserMicroserviceController],
  providers: [UsersService],
})
export class UserModule {}
