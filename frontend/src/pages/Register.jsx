import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "../style/pages/register.module.css";
import axios from  'axios'

const Register = () => {
  const [msg,setMsg]=useState('');
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit=async(e) => {
    e.preventDefault();
    if(formData.password!==formData.confirmPassword)
      return setMsg('password does not matched!')
    try{      
    const res = await axios.post('http://localhost:5000/user/signup/',formData) 
    //if (res.data.success)
        navigate('/login') 
    //setMsg(res.data.message);

    } 
    catch(err){
      setMsg(err.response.data.message)
    }
      
    setFormData({name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Register</h1>
         <p style={{color:(msg==='User Created Successfully!'? "green" :"red"),textAlign:'center',paddingBottom:'12px'}}>{msg}</p>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>

            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputGroup}>

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputGroup}>

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputGroup}>

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <button className={styles.btn} type="submit">
            Register
          </button>

          <div className={styles.loginSection}>
            <span className={styles.text}>Already have an account?{" "}</span>
            <Link to="/login" className={styles.loginLink}>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;