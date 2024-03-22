import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Car_owner } from "./carowner";

@Entity('Car')
export class Car{
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column()
    name:string;

    @Column()
    milage:number;
    
    @Column({ type:'date' })
    last_service:string;

    @OneToOne(type=>Car_owner)@JoinColumn()
    owner:string
}