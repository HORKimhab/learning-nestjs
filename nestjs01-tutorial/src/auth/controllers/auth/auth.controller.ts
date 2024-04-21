import { Controller, Get, Post, Req, Res, Session, UseGuards } from '@nestjs/common';
import { Request } from 'express';
// import { AuthGuard } from '@nestjs/passport';
import { AuthenticatedGuard, LocalAuthGuard } from 'src/auth/utilis/LocalGuard';

@Controller('auth')
export class AuthController {
    @UseGuards(LocalAuthGuard)
    // @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(){
    }

    // TODO
    // @Post('logout')
    // @UseGuards(AuthenticatedGuard)
    // async logout(@Req() req, @Res() res) {
    //   req.logout();
  
    //   res.clearCookie('NESTJS_SESSION_ID');
  
    //   res.send('Logged out successfully');
    // }

    @Get('')
    async getAuthSession(@Session() session: Record<string, any>){
       session.authenticated = true; 
       return session; 
    }

    // @UseGuards(LocalAuthGuard) // 401 
    @UseGuards(AuthenticatedGuard)
    @Get('status')
    async getAuthStatus(@Req() req: Request){
        return req.user; 
    }
}
