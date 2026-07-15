import Issue from '../models/IssueModel.js'
import Student from '../models/Student.Model.js'
import Book from '../models/Book.Model.js'

const issue_book=async(req,res)=>{
try{
const {studentId,bookId}=req.body;

const stu = await Student.findById(studentId);

if(!stu){
    return res.status(404).json({success:false,message:'student not found!'})
}

const book = await Book.findById(bookId);

if(!book){
    return res.status(404).json({success:false,message:'book not found!'})
}

if(book.available<=0){
    return res.status(404).json({success:false,message:'book not available!'})
}

const alreadyIssued = await Issue.findOne({
    studentId,bookId,status:'issued'
}) 

if(alreadyIssued){
return res.status(404).json({success:false,message:'book already issueed!'})
}

const issueCount = await Issue.countDocuments({
    studentId,status:'issued'
})

if(issueCount>=3){
     return res.status(404).json({success:false,message:'book issue  limit exceeded!'})
}

const issueDate = new Date();
const dueDate = new Date(issueDate);
dueDate.setDate(issueDate.getDate()+14);

const issued = await Issue.create({
    bookId,studentId,issueDate,dueDate
});

const {available}=book;
await Book.findByIdAndUpdate(bookId,{available:available-1})
console.log(book);

return res.status(200).json({success:true,message:'Book issued  sucessfulyy!'})
}
catch(err){
console.log(err);
res.status(500).json({success:false,mesage:'internal server error'})
}
}


const get_issue=async(req,res)=>{
try{
const totalStudents = await Student.countDocuments();

const totalBooks = await Book.aggregate([{
    $group:{
    _id:null,total:{$sum:'$quantity'}
    }
}]);

const availableBooks = await Book.aggregate([{
    $group:{
    _id:null,total:{$sum:'$available'}
    }
}]);

const issueBooks = await Issue.countDocuments({status:'issued'});

return res.status(200).json({
    totalStudents,
    totalBooks:totalBooks[0]?.total|| 0,
    availableBooks:availableBooks[0]?.total ||0,
    issueBooks
})
}
catch(err){
res.status(500).json({
    success:false,mesage:'internal server error!'
});
}
}


const fetch_issued=async(req,res)=>{
const page = Number(req.query.page) || 1;
const limit = Number(req.query.limit) || 5;
const skip = (page-1) * limit;
try{
const issued = await Issue.find({status:'issued'}).populate('bookId').populate('studentId').skip(skip).limit(limit)
const totalIssued = await Issue.countDocuments({status:'issued'});
const totalPage = Math.ceil(totalIssued/limit) ;
return res.status(200).json({issued,totalPage});
}
catch(err){
console.log(err);
}
}




const return_book=async(req,res)=>{
const issueId=req.params.issueId;
try{
const record = await Issue.findById(issueId);

const {bookId,dueDate}=record;
const returnDate = new Date();

let fineFees=0;

if(returnDate>returnDate){
    let lateDays=((returnDate-returnDate)/(1000*60*60*24));
    fineFees=lateDays*5;
}

await Issue.findByIdAndUpdate(issueId,{status:'returned',returnDate,fine:fineFees}) 
const {available} = await Book.findById(bookId);
const book = await Book.findByIdAndUpdate(bookId,{available:available+1});

res.status(200).json({success:true,message:'Book Returned Successfully!'})

}

catch(err){
res.status(500).json({success:false,message:'internal server error!'})
console.log(err);
}
}



const dashboard=async(req,res)=>{
try{
const studentId=req.user.studentId;
//console.log(typeof req.user.studentId);

const student =  await Student.findById({_id:studentId})
const issueBooks = await Issue.countDocuments({studentId,status:'issued'})
const dueBooks = await Issue.countDocuments({studentId,status:'issued',dueDate:{$lt:new Date()}})
const returnedBooks = await Issue.countDocuments({studentId,status:'returned'})
const result = await Issue.aggregate([
{
$match:{studentId:studentId}
},
{
$group:{
_id:null,totalFine:{$sum:'$fine'}
}
}
]);
const totalFine=result[0]?.totalFine || 0

res.status(200).json({
name:req.user.name,issueBooks,dueBooks,returnedBooks,totalFine,image:student.image
});
}
catch(err){
console.log(err);    
}
}


const my_books=async(req,res)=>{
try{
const id=req.user.studentId;

const books = await Issue.find({studentId:id}).populate('bookId')
const book=books.map(book=>book.bookId)

res.status(200).json({
    success:true,books,book
})
}
catch(err){
console.log(err);    
}
}


export {issue_book,get_issue,fetch_issued,return_book,dashboard,my_books};