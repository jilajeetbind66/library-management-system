import React from "react";
import styles from "../../style/admin/ViewBook.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const base_url = import.meta.env.VITE_BACKEND_URL


const ViewBook = () => {
  const navigate=useNavigate()  
  const {id}=useParams();
  const [book,setBook]=useState([]);
  
const Fetch_Details=async() => {
try{
const res = await axios.get(`${base_url}/books/book-details/${id}`,{withCredentials:true});
setBook(res.data.book)
}catch(err){
console.log(err.response.data.message);
}
};

useEffect(()=>{
Fetch_Details();
},[])



  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <button onClick={()=>navigate('/admin/book-list/')} className={styles.closeBtn}>❌</button>

        <h2 className={styles.heading}>📚 Book Details</h2>

        <div className={styles.info}>
          <div className={styles.row}>
            <span>Title</span>
            <p>{book.title}</p>
          </div>

          <div className={styles.row}>
            <span>Author</span>
            <p>{book.author}</p>
          </div>

          <div className={styles.row}>
            <span>ISBN</span>
            <p>{book.isbn}</p>
          </div>

          <div className={styles.row}>
            <span>Category</span>
            <p>{book.category}</p>
          </div>

          <div className={styles.row}>
            <span>Quantity</span>
            <p>{book.quantity}</p>
          </div>

          <div className={styles.row}>
            <span>Available</span>
            <p>{book.available}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBook;