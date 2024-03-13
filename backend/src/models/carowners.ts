import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('carowner')
export class Car_Owner{
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