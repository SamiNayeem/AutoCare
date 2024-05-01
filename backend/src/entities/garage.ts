import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Garage_owner } from "./garageowner";

@Entity('Garage')
export class Garage extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column()
    address:string;

    @OneToOne(()=>Garage_owner,(garage_owner)=>garage_owner.garage)
    @JoinColumn()
    garade_owner:Garage_owner;
}