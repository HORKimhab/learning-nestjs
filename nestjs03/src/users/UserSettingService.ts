// import { CreateUserSettingsInput } from './../graphsql/utils/CreateUserSettingsInput';
import { CreateUserSettingsInput } from 'src/graphsql/utils/CreateUserSettingsInput';
import { Injectable } from '@nestjs/common';
import { UserSetting } from 'src/graphsql/models/UserSetting';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/graphsql/models/User';

@Injectable()
export class UserSettingService {
  constructor(
    @InjectRepository(UserSetting)
    private userSettingsRepository: Repository<UserSetting>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  getUserSettingById(userId: number) {
    return this.userSettingsRepository.findOneBy({ userId });
  }

  async createUserSettings(createUserSettingsData: CreateUserSettingsInput) {
    const findUser = await this.userRepository.findOneBy({
      id: createUserSettingsData.userId,
    });

    if (!findUser) throw new Error('User Not Found');

    const newUserSetting = this.userSettingsRepository.create(
      createUserSettingsData,
    );
    const savedUserSetting =
      await this.userSettingsRepository.save(newUserSetting);

    findUser.settings = savedUserSetting;
    await this.userRepository.save(findUser);

    return savedUserSetting;
  }
}
