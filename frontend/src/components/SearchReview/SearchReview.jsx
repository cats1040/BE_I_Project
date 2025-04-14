import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReviewBox from '../ReviewBox/ReviewBox';
import "./SearchReview.css"

export default function SearchReview() {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/reviews", {method:"GET"})
        .then(res => res.json())
        .then(data => {
            setData(data);
        })
        .catch(err=>{console.log(err)});
    }, [])

    const filteredReviews = data.filter((review) =>
        review.reviewTitle.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <>
        <div className="searchReviewContainer">
            <div className="reviewSearch">
                <input type="text" name="searchReviews" id="searchReviews" onChange={(e) => setSearch(e.target.value)} placeholder='Search Review By Title' />

                {/* <select name="filterReviews" id="filterReviews">
                    <option value="allCategories">All Categories</option>
                    <option value="operatingSystem">Operating System</option>
                    <option value="browsers">Browsers</option>
                    <option value="web">Web</option>
                    <option value="microsoft">Microsoft</option>
                    <option value="fps">FPS</option>
                    <option value="gaming">Gaming</option>
                </select> */}

                <Link to="/addReview" className='filterReview'><button>+ ADD REVIEW</button></Link>
            </div>

            <ul className="reviewBoxesContainer" style={{listStyle:"none"}}>
                {filteredReviews.map((review) => (
                    <li key={review.id} id='reviewBoxes'>
                        <ReviewBox review={review} />
                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}
