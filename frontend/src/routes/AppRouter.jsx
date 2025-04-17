import React from 'react'
import {Routes, Route} from "react-router-dom"

import AllReviews from '../pages/AllReviews/AllReviews';
import AboutPage from "../pages/AboutPage/AboutPage"
import AddReview from '../pages/AddReview/AddReview';
import Login from '../pages/Login/Login';
import DetailReview from '../pages/DetailReview/DetailReview';  
import EditReview from '../pages/EditReview/EditReview';
import Register from '../pages/Register/Register';
import Profile from '../pages/Profile/Profile';
import NotFound from "../pages/NotFound/NotFound"

export default function AppRouter() {
  return (
    <Routes> 
        <Route path="/" element={<Register/>} />
        <Route path="/register" element={<Register />} />
        <Route path='/profile' element={<Profile/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/reviews" element={<AllReviews/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/addReview" element={<AddReview />} />
        <Route path="/reviews/:id" element={<DetailReview />} />
        <Route path="/reviews/:id/edit" element={<EditReview />} />
        <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}
