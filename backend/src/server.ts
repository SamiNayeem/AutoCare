import { DataSource } from "typeorm";
import { Car_owner } from "./models/carowner";
import { Car } from "./models/car";
import { Garage } from "./models/garage";
import { Garage_owner } from "./models/garageowner";
import { Service_list } from "./models/servicelist";
import { Service_order } from "./models/serviceorder";

const Server=new DataSource({
    type:"postgres",
    host:"localhost",
    port:5432,
    username:"postgres",
    password:"admin",
    database:"AutoCare",
    entities:[Car_owner,Car,Garage,Garage_owner,Service_list,Service_order],
    synchronize:true,
})

Server.initialize()
    .then(()=>{
        console.log("Server has been initialized");
        console.log("Connected to server");
    })
    .catch((err)=>{
        console.log("Error has ocured ",err);
    })