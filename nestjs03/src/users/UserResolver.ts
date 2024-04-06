import { UserSettingService } from './UserSettingService';
import { UserService } from './UserService';
import {
  Args,
  Int,
  Mutation,
  // Parent,
  Query,
  // ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { User } from '../graphsql/models/User';
// import { mockUsers } from 'src/__mocks__/mockUsers';
// import { UserSetting } from '../graphsql/models/UserSetting';
// import { mockUserSettings } from 'src/__mocks__/mockUserSettings';
import { CreateUserInput } from '../graphsql/utils/CreateUserInput';
// import { Inject } from '@nestjs/common';

export const incrementtalId = 3;
@Resolver(() => User)
export class UserResolver {
  // constructor(@Inject(UserService) private userService: UserService) {}
  // constructor(private userService: UserService) {}

  constructor(
    private userService: UserService,
    private userSettingService: UserSettingService,
  ) {}

  @Query(() => User)
  getUser() {
    return {
      id: 1,
      username: 'HKimhab',
      displayName: 'HKimhab Dev',
    };
  }

  @Query(() => User, { nullable: true })
  async getUserById(@Args('id', { type: () => Int }) id: number) {
    // return mockUsers.find((user) => user.id === id);
    return this.userService.getUserById(id);
  }

  @Query(() => [User])
  getUsers() {
    // return mockUsers;
    return this.userService.getUsers();
  }

  // @ResolveField(() => UserSetting, { name: 'settings', nullable: true })
  // getUserSettings(@Parent() user: User) {
  // return mockUserSettings.find((setting) => setting.userId === user.id);
  // return this.userSettingService.getUserSettingById(user.id);
  // }

  @Mutation(() => User)

  // Method 1 without input field
  // createUser(
  //   @Args('username') username: string,
  //   @Args('displayName', { nullable: true}) displayName: string)
  createUser(@Args('createUserData') createUserData: CreateUserInput) {
    // const { username, displayName } = createUserData;
    // const newUser = { username, displayName, id: ++incrementtalId };
    // mockUsers.push(newUser);
    // return newUser;

    return this.userService.createUser(createUserData);
  }
}
