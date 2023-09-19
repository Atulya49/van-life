import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div className='home-container'>
      <h1>You got the travel plans ,we got the travel vans.</h1>
      <p>Add adventure to your life by joining the #vanlife move
        and make your perfect road trip.
      </p>
      <Link className='link-button' to='/vans'> Find your van </Link>
    </div>
  )
}

export default Home
