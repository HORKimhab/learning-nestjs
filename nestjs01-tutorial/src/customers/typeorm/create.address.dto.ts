import { IsNotEmpty } from "class-validator";

export class CreateAddressDTO {

    @IsNotEmpty()
    line1: string;
    
    line2?: string; 

    @IsNotEmpty()
    zip: string; 
    city: string; 
    state: string; 
}