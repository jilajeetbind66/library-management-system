import { useState } from 'react';
import styles from '../../style/admin/ViewStudent.module.css'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
const base_url = import.meta.env.VITE_BACKEND_URL


const ViewStudent = () => {
const [user,setUser]=useState([]);
const [msg,setMsg]=useState('');
const {id}=useParams()
const navigate=useNavigate();

const fetchUser=async()=>{

try{
const res = await axios.get(`${base_url}/student/view-student/${id}`);
console.log(res.data);
setUser(res.data)
}
catch(err){
}
}

useEffect(()=>{
fetchUser();

},[])




  return (
    <div className={styles.container}>

      <div className={styles.card}>

        <div className={styles.left}>
     <button onClick={()=>navigate('/admin/students')} className={styles.btn}>❌</button>

          <img src={`${base_url}/images/${user.image}`} alt="Profile" />

          <h2>{user.name}</h2>
          <span className={styles.role}>{user.role}</span>
        </div>

        <div className={styles.right}>

          <h1>👤 User Details</h1>

          <div className={styles.info}>

            <div className={styles.box}>
              <small>📛 Name</small>
              <p>{user.name}</p>
            </div>

            <div className={styles.box}>
              <small>📧 Email</small>
              <p>{user.email}</p>
            </div>

            <div className={styles.box}>
              <small>🎓 Course</small>
              <p>{user.course}</p>
            </div>

            <div className={styles.box}>
              <small>🆔 Enrollment</small>
              <p>{user.enrollmentNo}</p>
            </div>

            <div className={styles.box}>
              <small>🛡️ Role</small>
              <p>{user.role}</p>
            </div>
          </div>    
        </div>
      </div>
    </div>
  );
};

export default ViewStudent;