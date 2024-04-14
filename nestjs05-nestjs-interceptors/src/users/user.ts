import { Exclude } from "class-transformer";

export class User {
    id: number; 
    username: string; 
    @Exclude()
    password: string; 
    displayName: string; 
}

export const mockUsers: User[] = [
    {
        id: 1, 
        username: 'hkimhab',
        password: 'password', 
        displayName: 'HKimhab Dev'
    }, 
    {
        id: 2, 
        username: 'hkimhab2',
        password: 'password2', 
        displayName: 'HKimhab Dev2'
    }, 
    {
        id: 3, 
        username: 'hkimhab3',
        password: 'password3', 
        displayName: 'HKimhab Dev3'
    }
]