import express from "express"
import { Service_order } from "../entities/serviceorder";

const router=express.Router();

router.post('/api/view-order',async(req,res)=>{
    const{
        garage_id,
    }=req.body;

    const order=await Service_order
    .getRepository()
    .createQueryBuilder('order')
    .where("order.garageId=:garage_id",{garage_id})
    .getOne();


});

export{
    router as viewOrderRouter
}