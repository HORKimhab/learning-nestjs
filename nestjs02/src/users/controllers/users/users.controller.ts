import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UpdateUserDto } from 'src/users/dtos/UpdateUser.dto';
import { UsersService } from 'src/users/service/users/users.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {}

    @Get()
    // async getUsers() {
    //     const users = await this.userService.findUsers(); 
    //     return users; 
    // }
    getUsers() {
        return this.userService.findUsers(); 
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto); 
    }

    @Put(':id')
    async updateUserById(@Param('id', ParseIntPipe) id: number, 
    @Body() updateUserDto: UpdateUserDto, 
    ){
        const updatedUser = await this.userService.updateUser(id, updateUserDto); 
    if (!updatedUser) {
      throw new NotFoundException('User not found');
    }
    return { user: updatedUser, message: 'User updated successfully' };
    }

    @Delete(':id')
    async deleteUserById(@Param('id', ParseIntPipe) id: number){
        await this.userService.deleteUser(id); 
    }
}
