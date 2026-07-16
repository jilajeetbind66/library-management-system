import React from "react";
import { Link } from "react-router-dom";
import styles from "../../style/student/StudentSidebar.module.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const base_url = import.meta.env.VITE_BACKEND_URL


const StudentSidebar = () => {
const navigate=useNavigate();

const handleLogout=async()=>{
try{
const res = await axios.post(`${base_url}/user/logout`,{},{withCredentials:true})

if(res.data.success)
  navigate('/')
}
catch(err){
  console.log(err.message);
}
}

  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.logo}>🎓 Student</h2>

      <nav>
        <ul className={styles.menu}>
          <li>
            <Link to="/student" className={styles.link}>
              🏠 Dashboard
            </Link>
          </li>

          <li>
            <Link to="/student/browse" className={styles.link}>
              📚 Browse Books
            </Link>
          </li>

          <li>
            <Link to="/student/mybooks" className={styles.link}>
              📖 My Books
            </Link>
          </li>

          <li>
            <Link to="/student/profile" className={styles.link}>
              👤 Profile
            </Link>
          </li>

          <li>
            <button  className={styles.logout} onClick={handleLogout}>
              🚪 Logout
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default StudentSidebar;
