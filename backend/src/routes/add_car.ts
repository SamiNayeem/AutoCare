import express from "express"
import { Car } from ".././entities/car"

const router=express.Router()

router.post('/api/add-car',async(req,res)=>{
    const{
        name,
        milage,
        last_service_date,
        last_service_name,
        carOwner,
    }=req.body

    const car=Car.create({
        name:name,
        milage:milage,
        last_service_date:last_service_date,
        last_service_name:last_service_name,
        car_owner:carOwner,
    });

    try{
        await car.save();
        res.send("Car added successfully");
    }
    catch(error){
        console.log(error);
        res.send(error);
    }
});

export{
    router as addCarRouter
}