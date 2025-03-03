import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDTO {
    @IsString()
    @IsNotEmpty()
    firstName: string; 

    @IsString()
    @IsNotEmpty()
    lastName: string; 

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string; 

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    password: string; 
}