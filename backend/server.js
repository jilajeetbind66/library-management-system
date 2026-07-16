import express from "express";
import connectDB from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
import bookRouter from './routes/book.routes.js'
import studentRouter from './routes/student.routes.js'
import issueRouter from './routes/issue.routes.js'
import cors from 'cors';
import dotenv from 'dotenv/config'
import cookieParser from "cookie-parser"; 

const app=express();
app.use(cookieParser());
app.use(express.static('public'))
app.use(cors({origin:process.env.CLIENT_URL,credentials:true}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

connectDB();


app.use('/user',authRouter);
app.use('/books',bookRouter);
app.use('/student',studentRouter);
app.use('/issue',issueRouter);


app.use((req,res)=>{
return res.status(404).json({
  success:false,message:'Routes Not Found!'  
})
})

app.listen(process.env.PORT,()=>console.log(`server run at port http://localhost:${process.env.PORT}`));
