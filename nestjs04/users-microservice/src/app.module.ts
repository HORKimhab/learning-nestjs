import { UserModule } from './users/users.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
