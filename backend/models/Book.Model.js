import mongoose from "mongoose";


const bookSchema = new mongoose.Schema({

    title:{
        type:String,
        required:[true,'book title is required'],
        minlength:2,
        maxlength:50,
        trim:true
    },

    author:{
        type:String,
        required:[true,'author name is required'],
        minlength:[3,'name must be atleast 3 character'],
        maxlength:[50,'name can not more than 50 character'],
        trim:true
    },

    isbn:String,

    category:String,

    quantity:{
        type:Number,
        required:true,
        min:[1,'atleast 1 copy is required']
    },

    available:{
        type:Number,
        required:true,
        min:[0,'available copy cannot be Negative']
    }
},{timestamps:true}
);



export default mongoose.model('Book',bookSchema);