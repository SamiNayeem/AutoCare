import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Garage_owners')
export class Garage_owners{
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
    password:string;
}