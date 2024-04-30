import express, { Request, Response } from 'express'
const app=express();
const port=3000;

app.use(express.json());

app.post("/login/data",(req,res)=>{
    res.send(req.body);
    console.log(req.body);
});

app.listen(port,()=>{
    console.log(`Server is up and running at http://localhost:${port}`);
})
