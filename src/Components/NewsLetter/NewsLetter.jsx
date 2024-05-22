import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newletter and stay in fashion!</p>
      <div>
        <input type="email" placeholder='Enter your e-mail' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
