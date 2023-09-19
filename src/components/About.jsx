import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div className='about-page-container'>
        <img src="" alt="" />
        <div className="about-page-container">
            <h1>Don't squeeze in a sedan when you can relax in a van</h1>
            <p>Our mission is to envilen your road trip with the perfect travel van rentals.
                Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                 (Hitch cost extra 🙃) 
            </p>
            <p>
               Our team is full of vanlife enthusiasts who know firsthand the magic of touring 
               the world no 4 whells.
            </p>
        </div>
        <div className="about-page-cta">
          <h2>Your destination is waiting . <br /> Your van is ready to roar.</h2>
          <Link className='link-button' to='/vans'> Explore our vans.</Link>
        </div>
    </div>
  )
}

export default About
