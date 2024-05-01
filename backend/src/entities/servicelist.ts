import { BaseEntity, Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Garage } from "./garage";

@Entity('Service_list')
export class Service_list extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column()
    car_wash:string;

    @Column()
    brake_change:string;

    @Column()
    oil_change:string;

    @Column()
    tire_change:string;

    @Column()
    waxing:string;

    @Column()
    windshield_change:string;

    @Column()
    air_filter_change:string;

    @Column()
    spark_change:string;

    @Column()
    shock_change:string;

    @Column()
    inspect_shocks_and_struts:string;

    @Column()
    wheel_align:string;

    @Column()
    engine_dignosis:string;

    @ManyToOne(()=>Garage,(garage)=>garage.services)
    garage:Garage;
}