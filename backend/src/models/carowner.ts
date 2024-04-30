import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Car } from "./car";
import { Service_order } from "./serviceorder";

@Entity('Car_owner')
export class Car_owner{
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column()
    firstname:string;

    @Column()
    lastname:string;

    @Column({ unique: true,length: 11 })
    phone:string;

    @Column({ unique: true })
    email:string;

    @Column()
    address:string;

    @Column()
    password:string;

    @OneToOne(()=>Car,(car)=>car.car_owner)
    car:Car;

    @OneToMany(()=>Service_order,(orders)=>orders.carOwner)
    orders:Service_order[]
}