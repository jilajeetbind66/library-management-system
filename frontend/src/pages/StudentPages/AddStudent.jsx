import React, { useState } from "react";
import styles from "../../style/admin/AddStudent.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const navigate=useNavigate();
  const [msg,setMsg]=useState('')
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    enrollmentNo: "",
    course: "",
    image: null,
  });

  const handleChange = (e) => {
    setForm({...form,[e.target.name]:event.target.value});
};

  const handleSubmit = async(e) => {
    e.preventDefault();
    
  const formData = new FormData();
  formData.append('name',form.name)
  formData.append('email',form.email)
  formData.append('password',form.password)
  formData.append('enrollmentNo',form.enrollmentNo)
  formData.append('course',form.course)
  formData.append('image',form.image)
  const base_url='https://library-management-system-z24o.onrender.com';
    try{
    const res = await axios.post(`${base_url}/student/add-student`,formData,{withCredentials:true}); 
    setMsg(res.data.message)
    navigate('/admin/students/',{state:{message:'Record Adeed Sucessfully !'}})
    }
    catch(err){
    console.log(err.response?.data?.message);
    setMsg(err.response?.data?.message)
    }
    setForm({
      name: "",
      email: "",
      password: "",
      enrollmentNo: "",
      course: "",
      image: null,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <button onClick={()=>navigate('/admin/students')} className={styles.btn}>❌</button>
        <h2 className={styles.title}>Enter Student Details</h2>
         <p style={{color:(msg!=='Student Added Sucessfully!' ? 'red': 'green'),textAlign:'center',fontSize:'20px',paddingBottom:'5px'}}>{msg}</p>
        <form onSubmit={handleSubmit} className={styles.form} encType="multipart/form-data">
          <div className={styles.formGroup}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Student Name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Enrollment</label>
            <input
              type="text"
              name="enrollmentNo"
              placeholder="Enter Enrollment No."
              value={form.enrollmentNo}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Course</label>
            <select
              name="course"
              value={form.course}
              onChange={handleChange}
            >
              <option value="">Select Course</option>
              <option value="BCA">BCA</option>
              <option value="BBA">BBA</option>
              <option value="BCom">BCom</option>
              <option value="MCA">MCA</option>
              <option value="MBA">MBA</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>Image</label>
 
            <input type="file"
              name="image"
              onChange={(e)=>setForm({...form,[e.target.name]:e.target.files[0]})}
            />
            
          </div>

          <button type="submit" className={styles.submitBtn}>
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;