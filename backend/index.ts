import express, { Request, Response } from 'express'
// import { Pool } from 'pg';


const app=express();
// const port=process.env.PORT;
const port=8000;
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello from Express!");
});

app.listen(port,()=>{
    console.log(`Server is up and running at http://localhost:${port}`);
})