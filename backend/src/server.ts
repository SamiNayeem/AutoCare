import { DataSource } from "typeorm";
import { Car_Owner } from "./models/carowners";

const Server=new DataSource({
    type:"postgres",
    host:"localhost",
    port:5432,
    username:"postgres",
    password:"admin",
    database:"AutoCare",
    entities:[Car_Owner],
    synchronize:true,
})

Server.initialize()
    .then(()=>{
        console.log("Server has been initialized");
    })
    .catch((err)=>{
        console.log("Error has ocured ",err);
    })