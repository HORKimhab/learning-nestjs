import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity({ name: 'payments' })
export class PaymentEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string; 

    @Column('float')
    amount: number; 
    
    @ManyToOne(() => User, (user) => user.payments)
    user: User;
}