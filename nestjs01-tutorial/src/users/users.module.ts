import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from 'src/typeorm';

@Module({
  controllers: [UsersController],
  providers: [
    {
      provide: 'USER_SERVICE', 
      useClass: UsersService,
    }
  ], 
  imports: [TypeOrmModule.forFeature(entities)],
})
export class UsersModule {}
