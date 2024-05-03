import express from "express"
import { Service_order } from "../entities/serviceorder";

const router=express.Router()

router.post('/api/update-order',async(req,res)=>{
    const{
        order_id,
    }=req.body;

    const update=await Service_order
        .getRepository()
        .createQueryBuilder('update')
        .where("order.id=:order_id",{order_id})
})