import express from "express"
import { Car_owner } from "../entities/carowner";
import { Garage_owner } from "../entities/garageowner";

const router=express.Router();

router.post('/api/user-login',async(req,res)=>{
    console.log('login');
    const{
        email,
        password,
        usertype
    }=req.body;

    if(req.body.usertype==='car'){
        const user=await Car_owner
            .getRepository()
            .createQueryBuilder('carowner')
            .where("carowner.email=:email",{email})
            .andWhere("carowner.password=:password",{password})
            .getOne();
        res.send(user);
    }
    else if(req.body.usertype==='garage'){
        const user=await Garage_owner
            .getRepository()
            .createQueryBuilder('garageowner')
            .where("garageowner.email=:email",{email})
            .andWhere("garageowner.password=:password",{password})
            .getOne();
        res.send(user);
    }
    else{
        res.send('invalid user type');
    }
});

export{
    router as userLoginRouter
}