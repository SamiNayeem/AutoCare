import { BaseEntity, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Garage_owner } from "./garageowner";
import { Service_list } from "./servicelist";
import { Service_order } from "./serviceorder";

@Entity('Garage')
export class Garage extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column()
    name:string;

    @Column()
    address:string;

    @OneToOne(()=>Garage_owner,(garage_owner)=>garage_owner.garage)
    @JoinColumn()
    garage_owner:Garage_owner;

    
    @OneToMany(()=>Service_list,(services)=>services.garage)
    services:Service_list[];

    @OneToMany(()=>Service_order,(orders)=>orders.garage)
    orders:Service_order[];
}