import React from 'react'
import {Routes,Route} from 'react-router-dom'
import GuestDashboard from '../pages/GuestDashboard'
import Home from '../pages/GuestPages/Home'
import AboutLibrary from '../pages/GuestPages/AboutLibrary'
import FeaturedBooks from '../pages/GuestPages/Featured'
import BookCategories from '../pages/GuestPages/BookCategories'
import LibraryTimings from '../pages/GuestPages/Timming'
import ContactUs from '../pages/GuestPages/Contact'
import ErrorPage from '../ErrorPage'
const GuestRoutes = () => {
  return (
    <>
<Routes>
  <Route  element={<GuestDashboard/>}>
    <Route index element={<Home/>}/>
    <Route path='about'  element={<AboutLibrary/>}/>
    <Route path='feature'  element={<FeaturedBooks/>}/>
    <Route path='categories'  element={<BookCategories/>}/>
    <Route path='timings'  element={<LibraryTimings/>}/>
    <Route path='contact'  element={<ContactUs/>}/> 
  </Route>
  <Route path='*' element={<ErrorPage/>}/>
</Routes>
      
    </>
  )
}

export default GuestRoutes
