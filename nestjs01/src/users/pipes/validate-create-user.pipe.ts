import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { CreateUserDto } from '../dtos/CreateUser.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
  // transform(value: any, metadata: ArgumentMetadata) {
    console.log('Inside ValidateCreateUserPipe!');
    console.log(`ValidateCreateUserPipe: `, value);
    console.log(metadata);

    const parseAgeToInt = parseInt(value.age.toString());

    if(isNaN(parseAgeToInt)){
      console.log(`${value.age} is not a number!`);
      throw new HttpException('Invalid Data Type for property age. Expected Number', HttpStatus.BAD_GATEWAY);
    } else {
      console.log(`${parseAgeToInt} is a number, Returning...`);
      return { ...value, age: parseAgeToInt };
    }

    // return value;
  }
}
