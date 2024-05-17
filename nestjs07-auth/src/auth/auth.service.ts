import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcryptjs';
import { LoginDTO } from 'src/user/request/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService, 
        private jwtService: JwtService
    ) {}

    async login(loginDTO: LoginDTO): Promise<unknown> {
        const user = await this.userService.findIdentifier(loginDTO); 
        const isPasswordMatched = await bcrypt.compare(loginDTO.password, user.password); 

        if(isPasswordMatched) {
            delete user.password; 
            const payload = { email: user.email, sub: user.id }; 
            const userPayloadJWT = {
                user: { ...user },
                accessToken: this.jwtService.sign(payload), 
            }
            
            return userPayloadJWT; 
        } else {
            throw new UnauthorizedException('Email and Password is incorret.')
        }
    }

}
