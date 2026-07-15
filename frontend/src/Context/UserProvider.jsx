import axios from "axios";
import { useEffect,useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider=({children})=>{
const [user,setUser]=useState(null);
const [loading,setLoading]=useState(false)

useEffect(()=>{

const checkLogin=async()=>{
const base_url='https://library-management-system-z24o.onrender.com';
try{
const res = await axios.get(`${base_url}/user/me`,{withCredentials:true});
setUser(res.data);
}
catch(err){
setUser(null)
}
finally{
setLoading(true)
}
}
checkLogin();
},[])


return (
<UserContext.Provider value={{user,setUser,loading}}>
{children}
</UserContext.Provider>
)

}



