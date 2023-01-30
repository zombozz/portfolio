import React from 'react'

const About = () => {
  return (
    <div id='about' className='container'>
        <div className='about-1'>
            <h1><span>01.</span>About Me</h1>
            <p><br></br>I’m a frontend developer building websites since 2020.<br></br><br></br>After one year of studying software engineering 
            at UNSW, I decided to take a break from uni and focus on working with the technologies that I personally enjoy: 
            those involved specifically in web development.<br></br><br></br>I truly enjoy working on creating beautiful websites that 
            are responsive with a strong focus on UI and UX, and I’m on a constant journey to improve my skills and learn 
            new technologies as quickly and efficiently as possible.
            </p>
        </div>
        <div className='image-container'>
        <div className='about-image'>
            <p>I don’t currently have a professional head shot so you’ll have to imagine <br></br><br></br>(or interview me haha)</p>
        </div>
        </div>
    </div>
  )
}

export default About