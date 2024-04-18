import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn({
        type: "bigint", 
    })
    id: number;

    @Column({
        nullable: false, 
        default: '',
    })
    username: string; 

    @Column({
        name: 'email_address',
        nullable: false, 
        default: '',
    })
    emailAddress: string; 

    @Column({
        nullable: false, 
        default: '', 
    }) 
    password: string; 
}