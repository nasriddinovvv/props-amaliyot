import React from 'react'
import nike from "/public/Picture.png"

function Card({ bgColor, btnColor }) {
  return (
    <div className='card' style={{ backgroundColor: bgColor }}>
      
  
      <div className="image-wrapper">
        <img src={nike} alt="nike-img" className='card-image' />
       
      </div>

      <h2 className='card-title'>
        NIKE AIR FORCE 1 '07 (white/black)
      </h2>

      <p className='price'><b>$89.99</b></p>

      <p className='description'>
        I lost left shoe, don't need this one anymore. Please buy it.
      </p>

      <button
        className='add-btn'
        style={{ backgroundColor: btnColor }}
      >
        <span>Add to cart</span>
      </button>
    </div>
  )
}

export default Card
