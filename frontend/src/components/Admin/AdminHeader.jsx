import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from '../../style/admin/AdminHeader.module.css';

const AdminHeader = () => {
const navigate=useNavigate();
const logout=async()=>{
const api='http://localhost:5000/user/logout'
try{
const res = await axios.post(api,{},{withCredentials:true})

if(res.data.success){
localStorage.removeItem('user')
navigate('/',{replace:true})
}
}
catch(err){
console.log(err);
alert('Logout Failed')
}
}
  return (

    <header className={styles.header}>

      <div>

        <h2>📚 Library Management System</h2>

      </div>

      <div className={styles.right}>

        <div className={styles.searchBox}>

          <input
            type="text"
            placeholder="Search books, students..."
          />

          <button>
            🔍
          </button>

        </div>

        <div className={styles.profile}>

          <button onClick={logout}>Logout</button>

        </div>

      </div>

    </header>

  );
};

export default AdminHeader;