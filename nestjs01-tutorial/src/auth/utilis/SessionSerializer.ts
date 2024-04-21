import { Inject } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { find } from "rxjs";
import { User } from "src/typeorm";
import { UsersService } from "src/users/services/users/users.service";

export class SessionSerializer extends PassportSerializer {
    constructor(
        @Inject('USER_SERVICE') private userService: UsersService) {
        super();
    }

    serializeUser(user: User, done: (err, user: User) => void) {
        console.log('serializeUser');
        done(null, user);
    }

    async deserializeUser(user: User, done: (err, user: User) => void) {
        console.log('deserializeUser');
        const findUser = await this.userService.findUserById(user.id); 
        return findUser ? done(null, findUser): done(null, null);
    }
}