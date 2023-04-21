import React from 'react'
import image1 from './images/1.PNG'
import image2 from './images/2.PNG'
import image13 from './images/3.PNG'
const Content = () => {
  return (
    <div className='content' style={{
        display:"flex",
        justifyContent:"space-evenly",
        marginTop:"20px",
        alignItems:"ceneter",
        textAlign:"center"
    }}>
        <div className="box">
            <img src={image1} alt="logo" className='logos' />
            <h3>2500</h3>
            <p>enterprice organizations successfully launched</p>
        </div>
        <div className="box">
            <img src={image2} alt="logo" className='logos' />
            <h3>45000</h3>
            <p>enterprice organizations successfully launched</p>
        </div>
        <div className="box">
            <img src={image13} alt="logo" className='logos' />
            <h3>200000+</h3>
            <p>Professional trained on product and strategy</p>
        </div>
    </div>
  )
}

export default Content