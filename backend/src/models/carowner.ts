import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}