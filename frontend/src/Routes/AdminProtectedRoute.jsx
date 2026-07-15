import React from 'react'
import { UserContext } from '../Context/UserContext'
import { useContext } from 'react'
import { Outlet,Navigate } from 'react-router-dom'
const AdminProtectedRoute = () => {
     const {user,loading}=useContext(UserContext);
    
       if(!loading)
        return <h1>Loading....</h1>

        if(!user)
        return <Navigate to='/login' state={{message:'login first then continue.....'}} replace />
    
        return <Outlet/>;
}

export default AdminProtectedRoute;
