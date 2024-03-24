import { Body, Controller, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Query, 
    Req, Res, UsePipes, ValidationPipe } 
from '@nestjs/common';
import { Request, Response, response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {

    @Get()
    getUsers(@Query('sortDesc', ParseBoolPipe) sortDesc: boolean){
        console.log(sortDesc);
        return {username: 'HKimahb', email: 'kimhab.zeecode@gmail.com'};
    }

    @Get('posts')
    getUsersPosts(){
        return [
            {
                username: 'HKimhab', 
                email: 'kimhab.zeecode@gmail.com', 
                posts: [
                    {
                        id: 23, 
                        title: 'Posts1',
                    }
                ]
            }
        ]
    }

    @Post('create')
    // createUser(@Req() request: Request, @Res() response: Response){
    //     console.log(request.body);
    //     response.send('Created');        
    // }
    @UsePipes(new ValidationPipe())
    createUser(@Body() userData: CreateUserDto){
        console.log(userData);
        return userData;
    }

    @Get(':id')
    // getUserById(@Req() request: Request, @Res() response: Response){
    //     console.log(request.params);
    //     response.send('');
    // }
    getUserById(@Param('id', ParseIntPipe) id: number){
        console.log(id); 
        return { id };
    }

    @Get(':id/:postId')
    // getUserById(@Req() request: Request, @Res() response: Response){
    //     console.log(request.params);
    //     response.send('');
    // }
    getUserByIdPostId(@Param('id', ParseIntPipe) id: number, @Param('postId') postId: string){
        console.log(id, postId); 
        return { id, postId };
    }

    @Get('posts/comments')
    getUsersPostsComments(){
        return [
          {
            posts: [
                {
                    id: 23, 
                    title: 'Posts1',
                }
            ]
          }
        ]
    }
}
