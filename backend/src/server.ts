import { DataSource } from "typeorm";
import { Car_owner } from "./models/carowner";

const Server=new DataSource({
    type:"postgres",
    host:"localhost",
    port:5432,
    username:"postgres",
    password:"admin",
    database:"AutoCare",
    entities:[Car_owner],
    synchronize:true,
})

Server.initialize()
    .then(()=>{
        console.log("Server has been initialized");
    })
    .catch((err)=>{
        console.log("Error has ocured ",err);
    })