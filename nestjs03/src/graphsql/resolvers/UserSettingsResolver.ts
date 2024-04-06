import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserSetting } from '../models/UserSetting';
import { CreateUserSettingsInput } from '../utils/CreateUserSettingsInput';
// import { mockUserSettings } from 'src/__mocks__/mockUserSettings';
import { UserSettingService } from 'src/users/UserSettingService';

@Resolver()
export class UserSettingsResolver {
  constructor(private userSettingsService: UserSettingService) {}

  @Mutation(() => UserSetting)
  async createUserSettings(
    @Args('createUserSettingsData')
    createUserSettingsData: CreateUserSettingsInput,
  ) {
    // console.log(createUserSettingsData);
    // mockUserSettings.push(createUserSettingsData);
    // return createUserSettingsData;

    const newUserSetting = await this.userSettingsService.createUserSettings(
      createUserSettingsData,
    );
    return newUserSetting;
  }
}
