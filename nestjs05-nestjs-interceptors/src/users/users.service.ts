import { Injectable } from "@nestjs/common";
import { mockUsers } from "./user";

@Injectable()
export class UsersService {
    getUsers() {
        return mockUsers;
    }
}