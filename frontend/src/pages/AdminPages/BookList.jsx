import styles from "../../style/admin/BookList.module.css";
import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const BookList = () => {
  const location=useLocation() 
  const [search, setSearch] = useState("");
  const [books,setBooks]=useState([]);
  const [msg,setMsg]=useState(location?.state?.message);
  const [page,setPage]=useState(1);
  const [totalPage,setTotalPage]=useState(0);
  const limit=5;


const handleSearch=async(e) => {
e.preventDefault();
const base_url='https://library-management-system-z24o.onrender.com';
try{
const res = await axios.get(`${base_url}/books/search-book/${search}`,{withCredentials:true});
setBooks(res.data.book)
}catch(err){
console.log(err.response.data.message);
}
};


const Fetch_All_Books=async()=>{
try{
const res = await axios.get(`http://localhost:5000/books/book-list?page=${page}&limit=${limit}`,{withCredentials:true});
setBooks(res.data.books)
setTotalPage(res.data.totalPage)

}catch(err){
console.log(err.response.data.message);
}
setSearch('')
}


useEffect(()=>{
Fetch_All_Books();  
},[page])



const handleDelete=async(id)=>{
if(!confirm('are you sure to deleted book ?'))
    return
try{
const res = await axios.get(`http://localhost:5000/books/delete-book/${id}`,{withCredentials:true});
setMsg(res.data.message);   
Fetch_All_Books();
}
catch(err){
setMsg(err.response.data.message);
}
}

{console.log(page)}
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>📚 Book-List 📚</h2>
      
      <div className={styles.searchBox}>
        <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search Book..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          className={styles.searchInput}/>

        <button type="submit" className={styles.searchBtn}>
          🔍 Search
        </button>
                 
        </form>
         <button className={styles.refresh} onClick={Fetch_All_Books} >↻</button>
        
      </div>

      <div className={styles.tableContainer}>
        {msg && <p style={{color:'green',textAlign:'center',fontSize:'20px'}}>{msg}</p>}
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>ISBN</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Available</th>
              <th style={{color:'yellow'}}>Action</th>
            </tr>
          </thead>

          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
                <td>{book.category}</td>
                <td>{book.quantity}</td>
                <td>{book.available}</td>

                <td className={styles.actions}>
                  <Link to={`/admin/view-book/${book._id}`} className={styles.view}>👁️</Link>
                  <Link to={`/admin/edit-book/${book._id}`} className={styles.edit}>✏️</Link>
                  <button onClick={()=>handleDelete(book._id)} className={styles.delete}>🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
       <div className={styles.pagination}>
  <button
    className={styles.pageBtn}
    onClick={() => setPage(page - 1)}
    disabled={page === 1}
  >
    ⬅ Prev
  </button>

  <span className={styles.pageNumber}>
    Page {page} / {totalPage}
  </span>

  <button
    className={styles.pageBtn}
    onClick={() => setPage(page + 1)}
    disabled={page === totalPage}
  >
    Next ➡
  </button>
</div>
      </div>
    </div>
  );
};

export default BookList;