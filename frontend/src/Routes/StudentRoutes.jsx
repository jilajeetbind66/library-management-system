import React from 'react'
import {Route,Routes} from 'react-router-dom';
import StudentDashboard from '../pages/StudentDashboard';
import Dashboard from '../pages/StudentPages/Dashboard';
import BrowseBooks from '../pages/StudentPages/BrowseBooks';
import MyBook from '../pages/StudentPages/MyBook';
import Profile from '../pages/StudentPages/Profile';
import ViewBookDetails from '../pages/StudentPages/ViewBookDetails';
const StudentRoutes = () => {    
 return (
    <div>
    <Routes>
        <Route element={<StudentDashboard/>}>
            <Route  index element={<Dashboard/>}/>
            <Route path='browse' element={<BrowseBooks/>} />          
            <Route path='mybooks' element={<MyBook/>}/>         
            <Route path='profile' element={<Profile/>}/>         
            <Route path='view-details/:id' element={<ViewBookDetails/>}/>
        </Route>
    </Routes>
    </div>
  )
}

export default StudentRoutes
