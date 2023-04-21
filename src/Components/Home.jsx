import React from 'react'
import './nav.css'
const Home = () => {
  return (
    <div className='nav'>
        <div className="leftContainer">
            <h3>Hootsuite</h3>
            <ul>
                <li>Platform</li>
                <li>plans</li>
                <li>EnterPrice</li>
                <li>Resource</li>
                <li>Education</li>
            </ul>
        </div>
        <div className="rightContainer">
            <h3>ContactUs</h3>
            <h3>Log in</h3>
            <button className='but'>Sign Up</button>
        </div>
    </div>
  )
}

export default Home