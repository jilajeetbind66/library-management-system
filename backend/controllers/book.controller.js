import { log } from 'console';
import Book from '../models/Book.Model.js'


const add_book=async(req,res)=>{
let {title,author,isbn,category,quantity}=req.body;
let available=quantity;

try{
    await Book.create({title,author,isbn,category,quantity,available});
    res.status(200).json({success:true,message:'Book Added Successfully!'})
}
catch(err){
    console.error(err);
    return res.status(500).json({
     success:false,
     message:'Failed To Add Book'
    });
}
}



const get_books=async(req,res)=>{

try{
const books = await Book.find();

res.status(200).json({
success:true,message:'Books Fetched Succefully',books
})

}
catch(err){
    console.error(err);
    res.status(500).json({
        success:false,message:'Failed to fech Books'
    })
}

}


const book_list=async(req,res)=>{
const page = Number(req.query.page) || 1;
const limit = Number(req.query.limit) || 5;
const skip=(page-1)*limit;
try{
const books = await Book.find().skip(skip).limit(limit);
const totalBook= await Book.countDocuments();
const totalPage= Math.ceil(totalBook/limit)
return res.status(200).json({
    success:true,message:'books fetched success!',books,totalPage
});
}
catch(err){
return res.status(404).json({
    success:false,message:'internal server error'
})
}
}


const search_book=async(req,res)=>{
const search = req.params.search;
try{
const book = await  Book.find({$or:[{title:{$regex:search,$options:'i'}},{author:{$regex:search,$options:'i'}}]});

return res.status(200).json({
    success:true,message:'data fetched! suceessfully',book
})
}
catch(err){
    console.log(err);
    
return res.status(500).json({
   success:false,message:'internal server error' 
})
}

} 


const book_details=async(req,res)=>{
try{
const book = await Book.findById(req.params.id);
return res.status(200).json({
    success:true,message:'Book Fetched!',book
})
}
catch(err){
console.log(err);
return res.status(500).json({
    success:false,message:'internal server error'
})  
}
}



const delete_book=async(req,res)=>{
try{
await Book.findByIdAndDelete(req.params.id);
return res.status(200).json({
    success:true,message:'Book Deleted Successfully!'
})
}
catch(err){
console.log(err);
return res.status(500).json({
    success:false,message:'internal server error'
})  
}
}


const edit_book=async(req,res)=>{
try{
const book = await Book.findById(req.params.id)
return res.status(200).json(book)

}
catch(err){
console.log(err);
return res.status(500).json({
    success:false,message:'internal server error'
})  

}
}



const update_book=async(req,res)=>{
try{
await Book.findByIdAndUpdate(req.params.id,req.body);
return res.status(200).json({
    success:true,message:'Book Updated Successfully!'
})    
}
catch(err){
 return res.status(500).json({
    success:false,message:'internal server error'
})  
}   
}




const select_book=async(req,res)=>{
const book=req.query.text;

try{
const books = await Book.find({title:{$regex:book,$options:'i'}});
return res.status(200).json({books});
}
catch(err){
console.log(err);

}
}


export {add_book,get_books,book_list,search_book,book_details,delete_book,edit_book,update_book,select_book};


