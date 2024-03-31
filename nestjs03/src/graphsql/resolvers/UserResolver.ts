
import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { User } from '../models/User';
import { mockUsers } from 'src/__mocks__/mockUsers';
import { UserSetting } from '../models/UserSetting';
import { mockUserSettings } from 'src/__mocks__/mockUserSettings';
import { CreateUserInput } from '../models/CreateUserInput';

export let incrementtalId = 3; 
@Resolver(() => User)
export class UserResolver {
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
    return mockUsers.find((user) => user.id === id);
  }

  @Query(() => [User])
  getUsers() {
    return mockUsers;
  }

  @ResolveField(() => UserSetting, { name: 'settings', nullable: true })
  getUserSettings(@Parent() user: User) {
    return mockUserSettings.find((setting) => setting.userId === user.id);
  }

  @Mutation(() => User)

    // Method 1 without input field 
    // createUser(
    //   @Args('username') username: string, 
    //   @Args('displayName', { nullable: true}) displayName: string)
    createUser(
      @Args('createUserData') createUserData: CreateUserInput)
    {
    const { username, displayName } = createUserData; 
    const newUser = { username, displayName, id: ++incrementtalId };
    mockUsers.push(newUser)
    return newUser; 
  }
}
