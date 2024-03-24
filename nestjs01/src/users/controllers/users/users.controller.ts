import { Body, Controller, Get, Param, Post, Query, Req, Res } from '@nestjs/common';
import { Request, Response, response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {

    @Get()
    getUsers(@Query('sortBy') sortBy: string){
        console.log(sortBy);
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
    createUser(@Body() userData: CreateUserDto){
        console.log(userData);
        return {}
    }

    @Get(':id/:postId')
    // getUserById(@Req() request: Request, @Res() response: Response){
    //     console.log(request.params);
    //     response.send('');
    // }
    getUserById(@Param('id') id: string, @Param('postId') postId: string){
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
