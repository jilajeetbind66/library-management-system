import React, { useState } from "react";
import styles from "../../style/admin/ReturnBook.module.css";
import { useEffect } from "react";
import axios from "axios";

const ReturnBook = () => {

  const [issuedBooks,setIssuedBook] = useState([]);
  const [msg,setMsg]=useState('');
    const [page,setPage]=useState(1);
    const [totalPage,setTotalPage]=useState(0);
    const limit=5;
  

const fetchIssuedBook=async()=>{
try{
const res = await axios.get(`http://localhost:5000/issue/fetch-issued?page=${page}&limit=${limit}`,{withCredentials:true});
setIssuedBook(res.data?.issued);
setTotalPage(res.data?.totalPage);
}
catch(err){
console.log(err);
}
}

useEffect(()=>{
fetchIssuedBook();
},[page]);




const handleReturn=async(issueId)=>{
try{
const res = await axios.patch(`http://localhost:5000/issue/return-book/${issueId}`,{},{withCredentials:true}); 
setMsg(res.data.message);
fetchIssuedBook();
}
catch(err){
  setMsg(err.response.data.message)
  console.log(err); 
}
}


  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>📚 Return Book</h2>

      <div className={styles.tableContainer}>
        {msg && <h3 style={{color:'green',paddingBottom:'10px',fontFamily:'arial'}}>{msg}</h3>}
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Student</th>
              <th>Book</th>
              <th>Issue Date</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {issuedBooks.length > 0 ? (
              issuedBooks.map((record) => (
                <tr key={record._id}>
                  <td>{record.studentId.name}</td>
                  <td>{record.bookId.title}</td>
                  <td>{record.issueDate.split('T')[0]}</td>
                  <td>{record.dueDate.split('T')[0]}</td>

                  <td>
                    <span
                      className={
                        record.status === "Issued"
                          ? styles.issued
                          : styles.overdue
                      }
                    >
                      {record.status}
                    </span>
                  </td>

                  <td>
                    <button className={styles.returnBtn} onClick={()=>handleReturn(record._id)}>
                      ↩ Return
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className={styles.noData}>
                  No Issued Books Found
                </td>
              </tr>
            )}
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

export default ReturnBook;