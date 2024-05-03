import express from "express"
import { Car_owner } from "../entities/carowner";

const router=express.Router()

router.post('/api/update-user',async(req,res)=>{
    const{
        user_id,
    }=req.body;

    const update=await Car_owner
        .getRepository()
        .createQueryBuilder('update')
        .where("update.id=:user_id",{user_id})
        .getOne();

    res.send(update);
});


export{
    router as updateUserRouter
}