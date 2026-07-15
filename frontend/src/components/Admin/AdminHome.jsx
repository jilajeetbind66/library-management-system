import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../style/admin/AdminContent.module.css';
import axios from 'axios';

const AdminHome = () => {
  
  const navigate=useNavigate();
   const [response,setResponse]=useState([]);
  
const fetchData=async()=>{
const base_url='https://library-management-system-z24o.onrender.com'
  try{
  const res = await axios.get(`${base_url}/issue/get-issue`,{withCredentials:true});
  setResponse(res.data);
  }
  catch(err){
  navigate('/login',{state:{message:err.response.data.message}})
  }  
}



  useEffect(()=>{
  fetchData();
  },[]);

  return (

    <div>

      <h1 className={styles.title}>
        Dashboard
      </h1>

      <div className={styles.cards}>

        <div className={styles.card}>
          <h2>{response.totalBooks}</h2>
          <p>Total Books</p>
        </div>

        <div className={styles.card}>
          <h2>{response.totalStudents}</h2>
          <p>Total Students</p>
        </div>

        <div className={styles.card}>
          <h2>{response.issueBooks}</h2>
          <p>Issued Books</p>
        </div>

        <div className={styles.card}>
          <h2>{response.availableBooks}</h2>
          <p>Available Books</p>
        </div>

      </div>


    </div>

  );
};

export default AdminHome;