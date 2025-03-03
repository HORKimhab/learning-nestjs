import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity({ name: 'payments' })
export class PaymentEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string; 

    @Column('float')
    amount: number; 

    @ManyToOne(() => UserEntity, (user) => user.paymnets)
    user: UserEntity;
}