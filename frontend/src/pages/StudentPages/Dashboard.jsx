import React from "react";
import styles from "../../style/student/Dashboard.module.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom';
const  Dashboard = () => {

const navigate = useNavigate();
const [student,setStudent]= useState();

const fetchStudent=async()=>{
const base_url='https://library-management-system-z24o.onrender.com';
try{
const res = await axios.get(`${base_url}/issue/dashboard`,{withCredentials:true});
setStudent(res.data);

}
catch(err){
navigate('/login',{state:{message:err.response.data?.message}})
}
}

useEffect(()=>{
fetchStudent();

},[]);

  return (
    <div className={styles.dashboard}>

      <h1 className={styles.title}>🎓Welcome Mr: <span style={{color:'green'}}>{student?.name}  
      </span></h1>
   

      <div className={styles.cards}>

        <div className={styles.card}>
          <h2>📚 Books Issued</h2>
          <h1>{student?.issueBooks}</h1>
        </div>

        <div className={styles.card}>
          <h2>⏳ Due Books</h2>
          <h1>{student?.dueBooks}</h1>
        </div>

        <div className={styles.card}>
          <h2>✅ Returned Books</h2>
          <h1>{student?.returnedBooks}</h1>
        </div>

        <div className={styles.card}>
          <h2>Total Fine</h2>
          <h1>{student?.totalFine}</h1>
        </div>

      </div>

      <div className={styles.notice}>
        <h2>📢 Library Notice</h2>
        <p>
          Please return books before the due date to avoid late fees.
        </p>
      </div>

    </div>
  );
};

export default Dashboard;