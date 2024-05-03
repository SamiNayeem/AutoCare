import express from "express"
import { Car } from "../entities/car";

const router=express.Router();

router.post('/api/view-order',async(req,res)=>{
    const{
        car_owner_id,
    }=req.body;

    const car=await Car
    .getRepository()
    .createQueryBuilder('car')
    .where("car.carOwnerID=:car_owner_id",{car_owner_id});

    res.send(car);
});

export{
    router as viewCarRouter
}