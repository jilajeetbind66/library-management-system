import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styles from '../../style/admin/IssueBook.module.css'
import {useNavigate} from 'react-router-dom'

const IssueBook = () => {
  const [msg,setMsg]=useState('');
  const navigate=useNavigate()
  const [students,setStudents]=useState([])
  const [studentSearch,setStudentSearch]=useState('');
  const [selectStudent,setSelectStudent]=useState(null)

  const [books,setBooks]=useState([])
  const [bookSearch,setBookSearch]=useState('');
  const [selectBook,setSelectBook]=useState(null)
  
 
  const issueDate = new Date(); 
  const dueDate = new Date(issueDate)
  dueDate.setDate(issueDate.getDate()+15)


const handleSubmit=async(e)=>{
e.preventDefault();
try{  
const res = await axios.post('http://localhost:5000/issue/issue-book',{studentId:selectStudent._id,bookId:selectBook._id},{withCredentials:true});
setMsg(res.data.message);
}
catch(err){
console.log(err);
setMsg(err.response.data.message);
}
}


const handleStudentChange=async(e)=>{
const value=e.target.value;

setStudentSearch(value);

if(value.trim()===''){
  setStudents([])
return;
}

try{
const res = await axios.get(`http://localhost:5000/student/search?text=${value}`,{withCredentials:true})
setStudents(res.data.students);
}
catch(err){
console.log(err);
}

}

const handleSelectStudent=(student)=>{
setSelectStudent(student)
setStudentSearch(student.name)
setStudents([]);

}



const handleBookChange=async(e)=>{
const value=e.target.value;
setBookSearch(value);

if(value.trim()===''){
  setBooks([])
return;
}

try{  
const res = await axios.get(`http://localhost:5000/books/search?text=${value}`,{withCredentials:true})
setBooks(res.data.books);
}
catch(err){
console.log(err);
}
}


const handleSelectBook=(book)=>{
setSelectBook(book)
setBookSearch(book.title)
setBooks([]);
}


  return(
<div className={styles.container}>

<div className={styles.card}>

<button
className={styles.cancelBtn}
onClick={() => navigate('/admin/')}
>
❌
</button>
<form onSubmit={handleSubmit}>
<h2 className={styles.heading}>Issue Book</h2>

<div className={styles.group}>
<label>Search Student</label>
{msg && <p style={{color:(msg ==='Book issued  sucessfulyy!' ? 'green' : 'red'),textAlign:'center',paddingBottom:'10px',fontSize:'20px'}}>{msg}</p>}

<input
type="text"
value={studentSearch}
onChange={handleStudentChange}
/>

{students.length > 0 && (
<div className={styles.dropdown}>
{students.map((stu) => (
<div
key={stu._id}
className={styles.item}
onClick={() => handleSelectStudent(stu)}
>
{stu.name}
</div>
))}
</div>
)}
</div>

<div className={styles.group}>
<label>Search Book</label>

<input
type="text"
value={bookSearch}
onChange={handleBookChange}
/>

{books.length > 0 && (
<div className={styles.dropdown}>
{books.map((bk) => (
<div
key={bk._id}
className={styles.item}
onClick={() => handleSelectBook(bk)}
>
{bk.title}
</div>
))}
</div>
)}
</div>



<div className={styles.dateRow}>

<div className={styles.group}>
<label>Issue Date</label>
<input
type="date"
value={issueDate.toISOString().split("T")[0]}
readOnly
/>
</div>

<div className={styles.group}>
<label>Due Date</label>
<input
type="date"
value={dueDate.toISOString().split("T")[0]}
readOnly
/>
</div>

</div>

<button
type="submit"
className={styles.submitBtn}
>
Issue Book
</button>

</form>

</div>

</div>
);
}

export default IssueBook
