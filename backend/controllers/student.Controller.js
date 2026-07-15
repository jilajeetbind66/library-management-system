import Student from '../models/Student.Model.js';
//import Issue from '../models/IssueModel.js';
import User from '../models/userModel.js';
import bcrypt from 'bcrypt';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from "url";
import { log } from 'console';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const add_student=async(req,res)=>{

let {name,email,password,enrollmentNo,course}=req.body;
const image=req.file.filename;
try{
password = await bcrypt.hash(password,10);

const student = await Student.create({name,email,password,enrollmentNo,course,image});
await User.create({name,email,password,studentId:student._id}); 

return res.status(200).json({
    sucess:true,
    message:'Student Added Sucessfully!'
 })

}

catch(err){

    if(err.code===11000){
        return res.status(409).json({
    success:false,
    message:'Email Already Used'
    }); 
}
    if(err.name==='ValidationError'){
    return res.status(422).json({
    success:false,
    message:'Mongoose Validation Error'
    });
    }

return res.status(500).json({success:false,message:'Internal Sever Error'})
}
// catch(err){
// return res.status(500).json({
//     success:false,
//     message:'Something went wrong. Please try agail later'
// })
// }
}



const get_students=async(req,res)=>{    
const page = Number(req.query.page)|| 1;
const limit = Number(req.query.limit)|| 4;
const skip= (page-1) *limit;
try{
const students = await Student.find().skip(skip).limit(limit)
const totalStudent = await Student.countDocuments();
const totalPage = Math.ceil(totalStudent/limit); 
return res.status(200).json({
success:true,message:'data fetched success!',students,totalPage
})
}
catch(err){
return res.status(500).json({
    success:false,message:'date fetching failed '
})
}

}


const search_students=async(req,res)=>{
const search=req.params.search;
try{
const students = await Student.find({$or:[{course:{$regex:search,$options:'i'}},{name:{$regex:search,$options:'i'}},{email:{$regex:search,$options:'i'}},{enrollmentNo:{$regex:search,$options:'i'}}]});
return res.status(200).json({
success:true,message:'data fetched success!',students
})
}
catch(err){
console.log(err);
return res.status(500).json({
    success:false,message:'date fetching failed '
})
}
}



const delete_student=async(req,res)=>{
try{
 const st = await Student.findById(req.params.id);

if(!st){  
return res.status(404).json({
success:false,message:'Record Not Found!'
})
 }

if(!st.image){
return res.status(404).json({
success:false,message:'Image Not Found!'
})
}

const imagePath= path.join(__dirname,'../public/images',st.image)
    fs.unlink(imagePath,(err)=>{
    console.log(err);
});

const user = await Student.findByIdAndDelete(req.params.id);
return res.status(200).json({
success:true,message:'Record Deleted Successfully!'
})

}
catch(err){
console.log(err.message);
    return res.status(500).json({
success:false,message:'internal server error'
});
}

}

let oldImage;
const edit_student_details=async(req,res)=>{
try{
const student = await Student.findById(req.params.id);
if(!student){
return res.status(404).json({
success:true,message:'Record not Found!'
})
}
oldImage=student.image;
return res.status(200).json(student)

}
catch(err){
return res.status(500).json({
    success:false,message:'internal server error'
})
}
}



const update_student=async(req,res)=>{
let image;
    if (req.file)
   image=req.file.filename
else
  image=oldImage

try{
const id =req.params.id
let {name,email,password,enrollmentNo,course}=req.body;
const stu = await Student.findByIdAndUpdate(id,{name,email,password,enrollmentNo,course,image})

if(stu){
    return res.status(200).json({
        success:true,message:'Record Updated Suceefully!'    });
}
}
catch(err){
    console.log(err);
    
return res.status(200).json({ 
    success:false,message:'internal server error' });
}
}



const view_student=async(req,res)=>{
try{
const user = await Student.findById(req.params.id);
return res.status(200).json(user)
}
catch(err){
console.log(err);
return res.status(404).json({
    success:flase, message:'internal server error'
})
}
}



const searchStudent=async(req,res)=>{
const text=req.query.text;
try{
const students = await Student.find({name:{$regex:text,$options:'i'}});
return res.status(200).json({students});
}
catch(err){
console.log(err);
}
}



const profile=async(req,res)=>{
const id = req.user.studentId;
try{
const student = await Student.findById(id);

return res.status(200).json({
  success:true,message:'student fetched!',student
})
}
catch(err){
res.status(500).json({
    success:false,message:'internal server error!'
})

}
}


export {add_student,get_students,search_students,delete_student,edit_student_details,update_student,view_student,searchStudent,profile};