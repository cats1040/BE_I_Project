import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import "./AddReview.css"
import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function AddReview() {
  return (
   <>
    <Header title="Add Review"/>
    
    <div className="addReviewContainer">
        <form action="http://localhost:8080/reviews" method="POST">
            
            <input type="text" name="username" id="username" placeholder='Username' required/>

            <input type="text" name="reviewTitle" id="reviewTitle" placeholder='Review title here' required/>

            <textarea name="reviewText" id="reviewText" rows={10} cols={10} placeholder='Review here' required></textarea>

            <button>SUBMIT</button>
        </form>

        <Link to="/reviews" className='addReviewHomeBtn'><button>HOME</button></Link>
    </div>

    <Footer/>
   </>
  )
}
