import React from "react";
import styles from "../../style/admin/AllStudentList.module.css";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios'
import { useLocation } from "react-router-dom";

const AllStudentList = () => {
const location = useLocation();
const [search,setSearch]=useState('');
const [students,setStudents]=useState([]);
const [msg,setMsg]=useState(location?.state?.message);
const [page,setPage]=useState(1);
const [totalPage,setTotalPage]=useState(0);
const limit=4;

const fetchStudent=async()=>{
try{

const res = await axios.get(`http://localhost:5000/student/get-students?page=${page}&limit=${limit}`,{withCredentials:true}); 
setStudents(res?.data?.students)
setTotalPage(res.data.totalPage);
}
catch(err){
console.log(err.response.data.message);
}
}

useEffect(()=>{
fetchStudent();
},[page]);


const handleSearch=async(e)=>{
  e.preventDefault();
try{
const res = await axios.get(`http://localhost:5000/student/search-students/${search}`); 
setStudents(res.data?.students)
}
catch(err){
console.log(err.response.data.message);
}
}


const handleDelete=async(id)=>{
if(!confirm('are you sure to deleted record!'))
 return

 try{
const res = await  axios.get(`http://localhost:5000/student/delete-student/${id}`)
setMsg(res?.data?.message);
fetchStudent();
}
catch(err){
console.log(err);
setMsg(err?.response?.data?.message);
}
}



return (

    <div className={styles.container}>
      <div className={styles.header}>
        <h2>All Students</h2>
        <div className={styles.actions}>
          <form onSubmit={handleSearch}>
          <input
            type="text"
            name="search"
            placeholder="Search Student..."
            className={styles.searchInput}
            onChange={(e)=>setSearch(e.target.value)}
          />
          <button type='submit' className={styles.search_btn}>Search</button>
          </form>
          
          <button onClick={fetchStudent} className={styles.refresh}>↻</button>
          <Link to='/admin/add-student' className={styles.addBtn}>
            + Add Student
          </Link>
        </div>
      </div>

      <div className={styles.tableWrapper}>
      <p style={{color:(msg==='Record Not Found!' ? 'red': 'green'),textAlign:'center',fontSize:'20px',paddingBottom:'5px'}}>{msg}</p>
       <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Course</th>
              <th>Enrollment</th>
              <th>Profile</th>
              <th>Role</th>
              <th colSpan='3' style={{textAlign:'center'}}>ACTION</th>
            </tr>
          </thead>

          <tbody>
            {students?.length > 0 ? (
              students.map((student) => (
                <tr key={student._id}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.course}</td>
                  <td>{student.enrollmentNo}</td>
                  <td><img src={`http://localhost:5000/images/${student.image}`} alt=""  height='50px' width='50px' style={{borderRadius:'50%'}}/></td>
                  <td>
                    <span className={styles.roleBadge}>
                      {student.role}
                    </span>
                  </td>
                  <th><Link to={`/admin/view-student/${student._id}`}>👤</Link></th>
                  <th><Link to={`/admin/edit-student/${student._id}`} style={{textDecoration:'none'}}>✏️</Link></th>
                  <th><button onClick={()=>handleDelete(student._id)} style={{border:'none'}}>🗑️</button></th>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className={styles.noData}>
                  No Students Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
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
  );
};

export default AllStudentList;