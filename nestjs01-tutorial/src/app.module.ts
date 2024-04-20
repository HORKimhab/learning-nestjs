import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import entities from './typeorm';

@Module({
  imports: [
    CustomersModule, 
    UsersModule, 
    TypeOrmModule.forRoot({
      type: 'mysql', 
      host: 'localhost', 
      // host: 'mysql_db', // For mysql in docker
      port: 3306,
      database: 'nestjs_01_tutorial', 
      entities, 
      synchronize: true,
      username: 'root',
      password: ''
    }), AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
