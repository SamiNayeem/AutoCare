import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Car_owner } from "./carowner";

@Entity('Car')
export class Car extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column()
    name:string;

    @Column()
    milage:string;
    
    @Column()
    last_service_date:string;

    @Column()
    last_service_name:string;

    @OneToOne(()=>Car_owner, (car_owner)=>car_owner.car)
    @JoinColumn()
    car_owner:Car_owner
}