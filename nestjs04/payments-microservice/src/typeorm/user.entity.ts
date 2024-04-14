import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { DateEntity } from "./date.entity";
import { PaymentEntity } from "./payment.entity";

@Entity({ name: 'users' })
export class UserEntity extends DateEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string; 

    @Column({ nullable: false })
    username: string; 

    @Column({ nullable: false })
    email: string; 

    @Column({ nullable: true })
    displayName?: string; 

    @OneToMany(() => PaymentEntity, (payment) => payment.user)
    @JoinColumn()
    paymnets: PaymentEntity[];
}