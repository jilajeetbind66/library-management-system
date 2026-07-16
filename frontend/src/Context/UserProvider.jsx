import axios from "axios";
import { useEffect,useState } from "react";
import { UserContext } from "./UserContext";
const base_url = import.meta.env.VITE_BACKEND_URL


export const UserProvider=({children})=>{
const [user,setUser]=useState(null);
const [loading,setLoading]=useState(false)

useEffect(()=>{

const checkLogin=async()=>{
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



