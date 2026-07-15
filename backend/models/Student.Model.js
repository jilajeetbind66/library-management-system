import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true,
        minlength:[3,'name must be atleast 3 character'],
        maxlength:[25,'name can not  more than 25 char']
    },

    email:{
        type:String,
        required:true,
        unique:true,
    },

    password:{
        type:String,
        minlength:[6,'password must contain atleast 6 charcter'],
        maxlength:[200,'password can not more than 20 charcter']
    },

    enrollmentNo:{
        type:String,
        required:true,
        unique:true,
    },

    course:{
        type:String,
        maxlength:[20,'course can not more than 20 char'],
        minlength:[2,'course name must be atleast 2 char']
    },
    
    image:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default:'student'
    }
},{timestamps:true});


export default  mongoose.model('Student', StudentSchema);

