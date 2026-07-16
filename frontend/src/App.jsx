import {Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard'
import StudentDashboard from './pages/StudentDashboard';
import GuestRoutes from './Routes/GuestRoutes';
import AdminRoutes from './Routes/AdminRoutes';
import AdminProtectedRoute from './Routes/AdminProtectedRoute';
import StudentRoutes from './Routes/StudentRoutes';
const App = () => {
  return (
    <div>

  <Routes>
      <Route path='/*' element={<GuestRoutes/>}/>
      <Route path='/login/' element={<Login/>}/> 
      <Route path='/student/*' element={<StudentRoutes/>}/>      
      
      <Route element={<AdminProtectedRoute/>}>
      <Route path='/admin/*' element={<AdminRoutes/>}/>
      </Route>
  </Routes> 


    </div>   
  )
}

export default App;
