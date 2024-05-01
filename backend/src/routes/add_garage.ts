import express from "express"
import { Garage } from ".././entities/garage";

const router=express.Router()

router.post('/api/addgarage',async(req,res)=>{
    const{
        name,
        address,
        garageOwner,
    }=req.body

    const garage=Garage.create({
        name:name,
        address:address,
        garage_owner:garageOwner,
    });

    try{
        await garage.save();
        res.send("Garage added successfully");
    }
    catch(error){
        console.log(error);
    }
    
});

export{
    router as addGarageRouter
}