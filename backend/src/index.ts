import { DataSource } from "typeorm"
import { Car_owner } from "./entities/carowner"
import { Car } from "./entities/car"
import { Garage } from "./entities/garage"
import { Garage_owner } from "./entities/garageowner"
import { Service_list } from "./entities/servicelist"
import { Service_order } from "./entities/serviceorder"
import express from "express"
import { registerUserRouter } from "./routes/car_owner_registration"
import { registerVendorRouter } from "./routes/garage_owner_registration"
import { userLoginRouter } from "./routes/userlogin"

const app=express();
const port=3000;

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

        app.use(express.json());
        app.use(registerUserRouter);
        app.use(registerVendorRouter);
        app.use(userLoginRouter);

        app.listen(port,()=>{
            console.log(`Server is up and running at http://localhost:${port}`);
        })
    })
    .catch((err)=>{
        console.log("Error has ocured ",err);
    })