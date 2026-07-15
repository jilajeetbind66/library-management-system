import { Route, Routes } from 'react-router-dom'
import AdminDashboard from '../pages/AdminDashboard'
import AdminHome from '../components/Admin/AdminHome'
import AddBook from '../pages/AdminPages/AddBook'
import AllStudentList from '../pages/StudentPages/AllStudentsList'
import AddStudent from '../pages/StudentPages/AddStudent'
import EditStudent from '../pages/StudentPages/EditStudent'
import VeiwStudent from '../pages/StudentPages/VeiwStudent'
import ErrorPage from '../ErrorPage'
import BookList from '../pages/AdminPages/BookList'
import ViewBook from '../pages/AdminPages/ViewBook'
import EditBook from '../pages/AdminPages/Editbook'
import IssueBook from '../pages/AdminPages/IssueBook'
import ReturnBook from '../pages/AdminPages/ReturnBook'

const AdminRoutes = () => {
  return (
    <div>
      <>
      <Routes>
        <Route element={<AdminDashboard/>}>

        <Route index element={<AdminHome/>}/>
        <Route path='add-book' element={<AddBook/>}/>
        <Route path='students' element={<AllStudentList/>}/>
        <Route path='add-student' element={<AddStudent/>}/>
        <Route path='edit-student/:id' element={<EditStudent/>}/>
        <Route path='view-student/:id' element={<VeiwStudent/>}/>
        <Route path='book-list' element={<BookList/>}/>
        <Route path='view-book/:id' element={<ViewBook/>}/>
        <Route path='edit-book/:id' element={<EditBook/>}/>
        <Route path='issue-book' element={<IssueBook/>}/>
        <Route path='return-book' element={<ReturnBook/>}/>

        </Route> 
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>

      </>
    </div>
  )
}

export default AdminRoutes;
