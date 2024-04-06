import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/graphsql/models/User';
import { UserSetting } from 'src/graphsql/models/UserSetting';
import { UserResolver } from './UserResolver';
import { UserService } from './UserService';
import { UserSettingService } from './UserSettingService';
import { UserSettingsResolver } from 'src/graphsql/resolvers/UserSettingsResolver';
// import { UserSettingServiceService } from './UserSettingService';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserSetting])],
  providers: [
    UserResolver,
    UserService,
    UserSettingService,
    UserSettingsResolver,
  ],
})
export class UsersModule {}
