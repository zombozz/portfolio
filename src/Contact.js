import React from 'react'

const Contact = () => {
  return (
    <div className='container' id="contact">
        <h1><span>04.</span>Contact</h1>
        <h3>Connect with me on social media:</h3>
        <div className='contact-social-links'>
          <a className='s1' target="blank" href='https://github.com/zombozz'><img src="images/github.png"></img></a>
          <a className='s2' target="blank" href='#'><img src="images/instagram.png"></img></a>
          <a className='s3' target="blank" href='https://www.linkedin.com/in/abdullah-ibn-saleem-819a6b230/'><img src="images/linkedin.png"></img></a>
          <a className='s4' target="blank" href='https://twitter.com/abdullah___is'><img src="images/twitter.png"></img></a>
        </div>
        <h2>...or email me at  <a href="mailto:rj4z80zz@gmail.com"><span> rj4z80zz@gmail.com</span></a></h2>
    </div>
  )
}

export default Contact