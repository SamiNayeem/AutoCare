import express from "express"
import { Garage_owner } from ".././entities/garageowner";

const router=express.Router();

router.post('/api/vendorregistration',async(req,res)=>{
    const{
        firstname,
        lastname,
        phone,
        email,
        password,
    }=req.body;

    const user=Garage_owner.create({
        firstname:firstname,
        lastname:lastname,
        phone:phone,
        email:email,
        password:password,
    });

    try{
        await user.save();
        res.send("User created successfully");
    }
    catch(error){
        console.log(error);
    }
});

export {
    router as registerVendorRouter
}