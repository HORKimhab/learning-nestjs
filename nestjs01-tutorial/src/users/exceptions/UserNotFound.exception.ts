import { HttpException, HttpStatus } from "@nestjs/common";

export class UserNotFoundException extends HttpException {
    constructor(msg?: string, status?: HttpStatus) {
    //   super('Forbidden', HttpStatus.FORBIDDEN);
        super(msg || 'User Not found', status || HttpStatus.BAD_REQUEST);
    }
  }