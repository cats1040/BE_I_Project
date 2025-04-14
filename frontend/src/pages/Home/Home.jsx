import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
    <h1>home</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero architecto sequi esse ea, ipsa deserunt amet? Corporis eveniet ad error excepturi, qui vitae debitis nisi beatae sequi facilis! Blanditiis optio excepturi quasi totam delectus laborum vero ex accusamus quidem voluptatum?</p>
    
    <Link to="/reviews">Reviews</Link>
    </>
  )
}
