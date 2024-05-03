import express from "express"
import { Service_order } from "../entities/serviceorder";

const router=express.Router()

router.post('/api/update-order',async(req,res)=>{
    const{
        order_id,
    }=req.body;

    const order=await Service_order
        .getRepository()
        .createQueryBuilder('order')
        .where("order.id=:order_id",{order_id})
        .getOne();

    console.log(order);

    if(order?.status==="pending"){
        const active=await Service_order
        .createQueryBuilder('update')
        .update('update')
        .set({status:'active'})
        .where("order.id=:order_id",{order_id})
        .execute();
    }
    else if(order?.status==="active"){
        const active=await Service_order
        .createQueryBuilder('update')
        .update('update')
        .set({status:'finished'})
        .where("order.id=:order_id",{order_id})
        .execute();
    }

    res.send(order);
});

export{
    router as updateOrderRouter
}