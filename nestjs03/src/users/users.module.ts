import { UserSettingsResolver } from './../graphsql/resolvers/UserSettingsResolver';
import { UserService } from './UserService';
import { Module } from "@nestjs/common";
import { UserResolver } from "./UserResolver";
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/graphsql/models/User';
import { UserSetting } from 'src/graphsql/models/UserSetting';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserSetting])],
  providers: [
    UserResolver,
    UserService,
    // UserSettingService,
    UserSettingsResolver,
  ],
})
export class UsersModule {}