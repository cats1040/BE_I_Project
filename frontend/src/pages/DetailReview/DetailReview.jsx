import React from 'react'
import { useState, useEffect } from 'react'
import "./DetailReview.css"
import Header from '../../components/Header/Header'
import { useParams } from "react-router-dom";
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

export default function DetailReview() {
    const { id } = useParams(); 
    const [review, setReview] = useState([]);

    useEffect(() => {
            fetch(`http://localhost:8080/reviews/${id}`, {method:"GET"})
            .then(res => res.json())
            .then(data => {
                setReview(data);
            })
            .catch(err=>{console.log(err)});
        }, []);

  return (
    <>
        <Header title={review.reviewTitle} />

        <div className="detailReviewContainer">
            <h2 style={{fontSize:"2em"}}>{review.reviewTitle}</h2>
            <p style={{whiteSpace:"pre-wrap", }}>{review.reviewText}</p>
            <p><b>{review.date}</b></p>
            <p style={{fontWeight:"700"}}>- {review.username}</p>

            <div className="detailReviewBtns">
                <Link to={`/reviews/${id}/edit`}><button className='detailReviewEdit'>Edit</button></Link>
                <form action={`http://localhost:8080/reviews/${id}?_method=DELETE`} method='POST'><button className='detailReviewDelete'>Delete</button></form>
            </div>
        </div>

        <Footer />
    </>
  )
}
