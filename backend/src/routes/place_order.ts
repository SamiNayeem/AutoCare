import express from "express"
import { Service_order } from ".././entities/serviceorder";

const router=express.Router()

router.post('/api/placeorder',async(req,res)=>{
    const{
        home_delivery,
        address,
        service_name,
        service_date,
        service_end_date,
        garage,
        carOwner,
    }=req.body

    const order=Service_order.create({
        home_delivery:home_delivery,
        address:address,
        service_name:service_name,
        service_date:service_date,
        service_end_date:service_end_date,
        garage:garage,
        carOwner:carOwner,
    });

    try{
        await order.save();
        res.send("Order plcaced successfully");
    }
    catch(error){
        res.send(error);
    }
});