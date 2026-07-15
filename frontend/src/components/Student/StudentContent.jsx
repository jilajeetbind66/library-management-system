import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Login from '../../pages/Login';
import { useNavigate } from 'react-router-dom';

const AdminContent = () => {
  const [data,setData]=useState([]);
const navigate=useNavigate();
const fetchData=async()=>{
try{
const base_url='https://library-management-system-z24o.onrender.com';
const res = await axios.get(`${base_url}/user/getData/`,{withCredentials:true}); 
console.log(res.data.message);

}catch(err){
  if (err?.response?.status===401){
   navigate('/',{state:{message:err.response.data.message}})
  }
console.log(err?.response?.data?.message);
}
} 
useEffect(()=>{
fetchData();
},[])
  return (
    <div>
      <h1>Student Content Area</h1>
    </div>
  )
}

export default AdminContent;
