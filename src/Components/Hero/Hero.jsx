import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/right-arrow.jpeg'
import hero_image from '../Assets/positive.jpeg'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
                <div className="heart icon">
                    <p>New</p>
                    <p>Arrivals!!!</p>
                </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero
