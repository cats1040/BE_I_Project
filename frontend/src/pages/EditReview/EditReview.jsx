import React from 'react'
import { useState, useEffect } from 'react'
import "./EditReview.css"
import { useParams } from "react-router-dom";
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer';    
import { Link } from 'react-router-dom';

export default function EditReview() {
    const { id } = useParams(); 
    const [review, setReview] = useState([]);

    useEffect(() => {
            fetch(`http://localhost:8080/reviews/${id}`, {method:"GET"})
            .then(res => res.json())
            .then(data => {
                setReview(data);
            })
            .catch(err=>{console.log(err)});
    }, [])

  return (
    <>
    
    <Header title="Edit Review" />

        <form action={`http://localhost:8080/reviews/${id}?_method=PATCH`} method="POST" className="editReviewContainer">

            <div className="detailReviewContainer">
                <textarea rows={5} type="text" name="reviewTitle" defaultValue={review.reviewTitle} style={{fontSize:"1.5em"}} />
                
                <textarea rows={30} name="reviewText" id="reviewText" defaultValue={review.reviewText}></textarea>
                <p style={{fontWeight:"700"}}> - {review.username}</p>

                <div className="detailReviewBtns">
                    <button className='detailReviewSave'>Save</button>
                    <Link to="/reviews"><button className='detailReviewHome'>Home</button></Link>
                </div>
            </div>

        </form>

        <Footer />
    </>
  )
}
