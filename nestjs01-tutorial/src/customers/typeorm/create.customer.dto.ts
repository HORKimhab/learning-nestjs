import { Type } from 'class-transformer';
import { CreateAddressDTO } from './create.address.dto';
import { IsEmail, IsNotEmpty, IsNotEmptyObject, IsNumber, ValidateNested } from "class-validator";

export class CreateCustomerDto {
    @IsNumber()
    @IsNotEmpty()
    id: number; 

    @IsEmail()
    email: string;

    @IsNotEmptyObject()
    @ValidateNested()
    @Type(() => CreateAddressDTO)
    address: CreateAddressDTO;

    @IsNotEmpty()
    name: string; 
    createdAt?: Date; 
}