import { useState } from 'react';
import styles from '../../style/admin/ViewStudent.module.css'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const ViewStudent = () => {
const [user,setUser]=useState([]);
const [msg,setMsg]=useState('');
const {id}=useParams()
const navigate=useNavigate();

//   const user = {
//     name: "Jila Jeet",
//     email: "jilajeet@gmail.com",
//     course: "MCA",
//     enrollment: "MCA2026001",
//     role: "Student",
//     image: "https://i.pravatar.cc/250?img=15",
//   };

const fetchUser=async()=>{

try{
const res = await axios.get(`http://localhost:5000/student/view-student/${id}`);
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

          <img src={`http://localhost:5000/images/${user.image}`} alt="Profile" />

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