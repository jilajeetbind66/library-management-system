import User from "../models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import Student from '../models/Student.Model.js'

// const Signup=async(req,res)=>{
// let {name,email,password}=req.body;
// try{
// password = await bcrypt.hash(password,10);
// await User.create({name,email,password}); 

// return res.status(200).json({success:true,message:'User Created Successfully!'})
// }
// catch(err){

//     if(err.code===11000){
//         return res.status(422).json({
//     success:false,
//     message:'Email Already Used'
//     }); 
// }
//     if(err.name==='ValidationError'){
//     return res.status(422).json({
//     success:false,
//     message:'Mongoose Validation Error'
//     });
//     }

// return res.status(500).json({success:false,message:'Internal Sever Error'})
// }
// }


const Login=async(req,res)=>{
const {email,password}=req.body;
try{
const user= await User.findOne({email});
  if(!user){
    return res.status(404).json({
    success:false,message:'User Not Found!'
    });
}

    if(! await bcrypt.compare(password,user.password)){
      return res.status(401).json({
    success:false,message:'incorrect username or password!'
    });
}  

const student = await Student.findOne({email})

const token = jwt.sign({studentId:student._id,role:user.role,name:user.name,image:student.image},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRE_IN});
res.cookie(process.env.COOKIE_NAME,token,{
  httpOnly: true,
  secure: true,
  sameSite: "None"
})

return res.status(200).json({
        success:true,role:user.role,message:'Login Success!',image:student.image,studentId:student._id
    })
}
catch(err){
console.log(err);
}
}


const logout=(req,res)=>{
try{
res.clearCookie('token')
res.status(200).json({success:true,message:'Logout Success!'})
}
catch(err){
  console.log(err.message);
  
}
}


export {Login,logout}