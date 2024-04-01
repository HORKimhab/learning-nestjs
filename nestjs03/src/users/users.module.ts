import { UserService } from './UserService';
import { Module } from "@nestjs/common";
import { UserResolver } from "./UserResolver";
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/graphsql/models/User';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserResolver, UserService],
})

export class UsersModule {}