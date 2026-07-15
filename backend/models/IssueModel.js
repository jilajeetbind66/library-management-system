import mongoose from 'mongoose';

const issueSchema = new mongoose.Schema({

    bookId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Book'
    },

    studentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Student'
    },

    issueDate:{
        type:Date,
        required:true
    },
    dueDate:{
        type:Date,
        required:true
    },
    
    returnDate:{
        type:Date,
        default:null
    },
    status:{
        type:String,
        enum:['issued','returned','overdue'],
        default:'issued'
    },

    fine:{
        type:Number,
        default:0
    }

},
{
    timestamps:true
}
);


export default mongoose.model('Issue',issueSchema);