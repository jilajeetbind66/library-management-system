import React, { useState,useContext } from "react";
import styles from "../style/pages/login.module.css";
import {Link} from 'react-router-dom'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
const Login = () => {
  const {setUser}=useContext(UserContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({email: "",password: "",});
  const location = useLocation();
  const [msg,setMsg]=useState(location?.state?.message || '')
 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setMsg('')
  };

  const handleSubmit =async(e) => {
    e.preventDefault();
const base_url='https://library-management-system-z24o.onrender.com';
try{
const res = await axios.post(`${base_url}/user/login/`,formData,{withCredentials:true});
setUser(res.data)
if(res.data.role==='admin'){ 
 return navigate('/admin/',{replace:true});
 }
else(res.data.role==='student')
navigate('/student')  
}
catch(err){
setMsg(err.response.data.message);
  
}

  setFormData({
    email: "",
    password: "",
  })
  
 };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Login</h1>

        <form onSubmit={handleSubmit}>
          <p style={{color:'red',textAlign:'center',paddingBottom:'20px'}}>{msg}</p>
  <div className={styles.inputGroup}>

    <input
      type="email"
      name="email"
      placeholder="Enter the email"
      value={formData.email}
      onChange={handleChange}
    />
  </div>

  <div className={styles.inputGroup}>

    <input
      type="password"
      name="password"
      placeholder="Password"
      value={formData.password}
      onChange={handleChange}
    />
  </div>

  <button className={styles.btn} type="submit">
    Login
  </button>

  
</form>
      </div>
    </div>
  );
};

export default Login;