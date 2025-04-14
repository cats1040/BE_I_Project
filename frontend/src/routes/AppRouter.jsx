import React from 'react'
import {Routes, Route} from "react-router-dom"

import Home from '../pages/Home/Home';
import AllReviews from '../pages/AllReviews/AllReviews';
import AboutPage from "../pages/AboutPage/AboutPage"
import AddReview from '../pages/AddReview/AddReview';
import Login from '../pages/Login/Login';
import DetailReview from '../pages/DetailReview/DetailReview';  
import EditReview from '../pages/EditReview/EditReview';

export default function AppRouter() {
  return (
    <Routes> 
        <Route path="/" element={<Login/>} />
        <Route path="/reviews" element={<AllReviews/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/addReview" element={<AddReview />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reviews/:id" element={<DetailReview />} />
        <Route path="/reviews/:id/edit" element={<EditReview />} />
    </Routes>
  )
}
