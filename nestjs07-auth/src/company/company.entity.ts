import { DateEntity } from "src/utils/date.entity";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Company extends DateEntity{
  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;
}