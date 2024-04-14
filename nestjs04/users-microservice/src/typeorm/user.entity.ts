import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { DateEntity } from "./date.entity";

@Entity({ name: 'users' })
export class User extends DateEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string; 

    @Column({ nullable: false })
    username: string; 

    @Column({ nullable: false })
    email: string; 

    @Column({ nullable: true })
    displayName?: string; 
}