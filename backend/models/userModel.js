import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
name:{
type:String,
required:[true, 'Name is required'],
minlength:[3,'name must be at least 3 character']
},
email:{
type:String,
unique:true,
required:[true,'Email is required']
},

password:{
type:String,
required:[true,'Password is required'],
minlength:[8,'password must be at least 8 character']
},
studentId:{
type:mongoose.Schema.Types.ObjectId,
ref:'Student'
},
role:{
type:String,
enum:['student','admin'],
default:'student'
},

signupAt:{
    type:Date,
    default:Date.now
}

});




export default mongoose.model('user',userSchema);