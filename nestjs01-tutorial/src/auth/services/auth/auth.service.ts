import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { comparePassword } from 'src/utilis/bcrypt';

@Injectable()
export class AuthService {
    constructor(
        @Inject('USER_SERVICE')
        private usersService: UsersService) {}

    async validateUser(username: string, password: string): Promise<any> {
      const user = await this.usersService.findUser(username);
      if (user && comparePassword(password, user.password)){
        return user;
      }
      return null;
    }
}
