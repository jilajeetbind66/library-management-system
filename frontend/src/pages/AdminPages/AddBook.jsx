import React, {useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../style/admin/AddBook.module.css";
import axios from 'axios'
const AddBook = () => {

  const navigate=useNavigate();
  const [msg,setMsg]=useState('')
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
const base_url='https://library-management-system-z24o.onrender.com';
try{
const res= await axios.post(`${base_url}/books/add-book`,bookData,{withCredentials:true});
setMsg(res.data.message);
}
catch(err){
setMsg(err.response.data.message);
return  navigate('/login',{state:{message:err.response.data.message}})
}
    setBookData({
      title: "",
      author: "",
      isbn: "",
      category: "",
      quantity:0,
    });
  };

  return (
    <div className={styles.container}>
      <button onClick={()=>navigate('/admin/')} className={styles.closeBtn}>❌</button>
      
      <h2>Add New Book</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        {msg && <p style={{color:(msg==='Book Added Successfully!' ? 'green' : 'red'),textAlign:'center'}}>{msg}</p>}
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

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;