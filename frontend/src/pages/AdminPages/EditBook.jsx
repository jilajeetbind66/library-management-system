import React, {useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "../../style/admin/AddBook.module.css";
import axios from 'axios'
import { useEffect } from "react";
const base_url = import.meta.env.VITE_BACKEND_URL


const EditBook = () => {
  const {id}=useParams();
  const navigate=useNavigate();
  const [msg,setMsg]=useState('');
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    isbn: "",
    category: "",
    quantity:0,
  });

  const handleChange = (e) => {
    setBookData({
      ...bookData,
      [e.target.name]: e.target.value,
    });
    setMsg('')
  };

const handleSubmit = async(e) => {
e.preventDefault();
try{
const res= await axios.post(`${base_url}/books/edit-book/${id}`,bookData,{withCredentials:true});
setMsg(res.data.message);
 navigate('/admin/book-list/',{state:{message:res.data.message}})

}
catch(err){
setMsg(err.response.data.message);
}
    setBookData({
      title: "",
      author: "",
      isbn: "",
      category: "",
      quantity:0,
    });
  };

const Fetch_Edit_Book=async()=>{
    console.log('edit');
    
try{
const res = await axios.get(`${base_url}/books/edit-book/${id}`,{withCredentials:true})
setBookData(res.data);
}
catch(err){
console.log(err.response.data.message);
}

}


useEffect(()=>{
console.log('use');
Fetch_Edit_Book();
},[])

  return (
    <div className={styles.container}>
      <button onClick={()=>navigate('/admin/book-list/')} className={styles.closeBtn}>❌</button>
      
      <h2>UPDATE-BOOK</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        {msg && <p style={{color:(msg==='Book Updated Successfully!' ? 'green' : 'red'),textAlign:'center'}}>{msg}</p>}
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={bookData.title}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="author"
          placeholder="Author Name"
          value={bookData.author}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="isbn"
          placeholder="ISBN Number"
          value={bookData.isbn}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={bookData.category}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={bookData.quantity}
          onChange={handleChange}
          required
        />

        <button type="submit">UPDATE</button>
      </form>
    </div>
  );
};

export default EditBook;